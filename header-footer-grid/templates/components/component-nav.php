<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */
namespace HFG;

use HFG\Core\Components\Nav;
use HFG\Core\Builder\Header as HeaderBuilder;

$style                 = component_setting( Nav::STYLE_ID );
$dropdowns_expanded    = component_setting( Nav::EXPAND_DROPDOWNS );
$additional_menu_class = $dropdowns_expanded && current_row( HeaderBuilder::BUILDER_NAME ) === 'sidebar' ? ' ' . Nav::DROPDOWNS_EXPANDED_CLASS : '';
$container_classes     = [ $style ];

$container_classes[] = 'site__nav main-navigation nav-menu-primary';

$menu_id = Nav::NAV_MENU_ID . '-' . current_row( HeaderBuilder::BUILDER_NAME );
?>

<div class="nv-nav-wrap">
	<anv id=" id='site-navigation'" role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
			aria-label="<?php esc_attr_e( 'Primary Menu', 'neve' ); ?>">

        <button class='menu-toggle' aria-controls='primary-menu' aria-expanded='false'>
            <span><?php esc_html_e('Menu', '_s'); ?></span>
        </button>

        <?php
        wp_nav_menu([
            'theme_location' => 'menu-primary',
            'menu_id'        => 'primary-menu',
            'menu_class'     => 'sm sm-menu nav-menu',
            'fallback_cb'    => '_s_page_menu',
        ]);
        ?>
	</anv>
</div>

