<?php

add_shortcode('_s_account_menu', '_s_render_account_menu');

function _s_render_account_menu($atts)
{
    $html = '<ul class="sub-menu has-submenu">';

    if (is_user_logged_in()) {
        $html .= '<li class="menu-item"><a href="' . wc_get_account_endpoint_url('dashboard') . '">My Account</a></li>';
    } else {
        $html .= '<li class="menu-item"><a href="' . wc_get_account_endpoint_url('dashboard') . '">Login</a></li>';
        $html .= '<li class="menu-item"><a href="' . wc_get_account_endpoint_url('dashboard') . '">Register</a></li>';
    }

    $html .= '<li class="menu-item"><a href="' . home_url('track-your-order') . '">Track Order</a></li>';

    $html .= '</ul>';

    return $html;
}
