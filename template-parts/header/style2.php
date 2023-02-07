<header id='masthead' class='w-full site__header'>

    <div class='site__branding'>
        <div class='container'>
            <?php the_custom_logo(); ?>

            <?php if ( ! has_custom_logo()) : ?>
                <h1><a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
            <?php endif; ?>
        </div>
    </div>

    <nav id='site-navigation' class='site__nav main-navigation'>
        <div class='container'>
            <button class='menu-toggle' aria-controls='primary-menu' aria-expanded='false'>
                <span><?php esc_html_e('Menu', '_s'); ?></span>
            </button>

            <?php do_action('_s_before_navigation'); ?>

            <?php
            wp_nav_menu([
                'theme_location' => 'menu-primary',
                'menu_id'        => 'primary-menu',
                'menu_class'     => 'sm sm-menu nav-menu',
                'fallback_cb'    => '_s_page_menu',
            ]);
            ?>
            <?php do_action('_s_after_navigation'); ?>
        </div>
    </nav>

</header>