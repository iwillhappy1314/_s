<?php
/**
 * Template Name: Inquiry
 *
 * Media Albums template. Uses dt_gallery post type and dt_gallery_category taxonomy.
 *
 * @since   1.0.0
 *
 * @package The7\Templates
 */

defined('ABSPATH') || exit;

use Wenprise\Forms\Form;

get_header();

$inquiry_ids = _s_get_inquiry_ids();

$values = [];
foreach ($inquiry_ids as $product_id) {
    $product  = get_post($product_id);
    $values[] = [
        'part_no'      => $product->post_title,
        'manufacturer' => get_post_meta($product_id, '_brand', true),
        'package'      => get_post_meta($product_id, '_package', true),
        'request_qty'  => 1,
        'target_price' => '',
    ];
}

if (empty($values)) {
    $values = [
        [
            'part_no'      => '',
            'manufacturer' => '',
            'package'      => '',
            'request_qty'  => '',
            'target_price' => '',
        ],
        [
            'part_no'      => '',
            'manufacturer' => '',
            'package'      => '',
            'request_qty'  => '',
            'target_price' => '',
        ],
    ];
}

?>

    <!-- Content -->
    <div id="content" class="content" role="main">

        <?php
        $form = new Form;

        $form->setRenderer(new \Wenprise\Forms\Renders\DefaultFormRender('horizontal'));

        // Set form method
        $form->setMethod('POST');

        $fields = [
            [
                'name'    => 'part_no',
                'display' => 'Part No.',
                'type'    => 'text',
            ],
            [
                'name'    => 'manufacturer',
                'display' => 'Manufacturer',
                'type'    => 'text',
            ],
            [
                'name'    => 'package',
                'display' => 'Package',
                'type'    => 'text',
            ],
            [
                'name'    => 'request_qty',
                'display' => 'Request Qty',
                'type'    => 'text',
            ],
            [
                'name'    => 'target_price',
                'display' => 'Target Price',
                'type'    => 'text',
            ],
        ];

        $form->addGroup('Inquiry');

        $form->addTableInput('inquiry', '', [], $fields)
             ->setDefaultValue($values);

        $form->addGroup('Contact Information');

        $form->addText('company_name', 'Company Name')->setRequired();
        $form->addText('contact_name', 'Contact Name')->setRequired();
        $form->addEmail('email', 'Email')->setRequired();
        $form->addText('tel', 'Telephone');
        $form->addText('fax', 'Fax');
        $form->addTextArea('remark', 'Remark');
        $form->AddCaptcha('captcha', 'Captcha')
             ->setUrl(admin_url('admin-ajax.php?action=get_captcha'));

        // Set submit button
        $form->addSubmit('send', 'Submit');

        // Validate form and get form data
        if ($form->isSuccess()) {

            $values = $form->getValues();

            $metas = [
                'inquiry',
                'company_name',
                'contact_name',
                'email',
                'tel',
                'fax',
                'remark',
            ];

            $post_id = wp_insert_post([
                'post_type'  => 'inquiry',
                'post_title' => $values->company_name,
            ]);

            foreach ($metas as $meta) {
                update_post_meta($post_id, $meta, $values->$meta);
            }

            ob_start();
            ?>

            <table class='rs-table'>
                <tr>
                    <td>Part No.</td>
                    <td>Manufacturer</td>
                    <td>Package</td>
                    <td>Request Qty</td>
                    <td>Target Price</td>
                </tr>
                <?php foreach ($values->inquiry as $item): ?>
                    <tr>
                        <td><?= $item[ 'part_no' ]; ?></td>
                        <td><?= $item[ 'manufacturer' ]; ?></td>
                        <td><?= $item[ 'package' ]; ?></td>
                        <td><?= $item[ 'request_qty' ]; ?></td>
                        <td><?= $item[ 'target_price' ]; ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>

            <table class="rs-table">
                <tr>
                    <th>Company Name</th>
                    <td><?= $values->company_name; ?></td>
                </tr>
                <tr>
                    <th>Company Name</th>
                    <td><?= $values->contact_name; ?></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><?= $values->email; ?></td>
                </tr>
                <tr>
                    <th>Telephone</th>
                    <td><?= $values->tel; ?></td>
                </tr>
                <tr>
                    <th>Fax</th>
                    <td><?= $values->fax; ?></td>
                </tr>
                <tr>
                    <th>Remark</th>
                    <td><?= $values->remark; ?></td>
                </tr>
            </table>


            <?php

            echo '<div style="border:1px solid #dff0d8; padding: 12px 16px; border-radius: 3px;color: #3c763d;background-color: #dff0d8; margin-bottom: 32px;">We have received your inquiry, we will contact you soon.</div>';

            $html = ob_get_clean();

            $email_helper = new WenpriseEmailHelper();

            $email_helper->send_mail('erica.guo@shengtenghk.com.cn', 'There a new inquiry on your website.', $html);

        } else {
            $form->render();
        }

        ?>

    </div><!-- #content -->

<?php get_footer();
