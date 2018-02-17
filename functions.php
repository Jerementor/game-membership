<?php
//Loading in Scripts
function thegc_enqueue_styles(){
    wp_enqueue_script('webflow-js', get_template_directory_uri() . '/assets/js/webflow.js', array('jquery'));
    wp_enqueue_script('thegc_custom', get_template_directory_uri() . '/assets/js/thegc_custom.js', array('jquery'));

    
    wp_enqueue_style("normalize",  get_template_directory_uri() . "/assets/css/normalize.css");
    wp_enqueue_style("webflow",  get_template_directory_uri() . "/assets/css/webflow.css");
    wp_enqueue_style("thegameclass",  get_template_directory_uri() ."/assets/css/thegameclass.webflow.css");
    wp_enqueue_style("thegameclass-style", get_stylesheet_uri());
    
}
add_action("wp_enqueue_scripts", "thegc_enqueue_styles");

function thegc_menu_setup(){
    
    //Registers custom primary nav menu 
    register_nav_menus( array(
        'logged-in'     => __("Logged-In Menu", "thegameclass-login"),
        'logged-out'    => __("Logged-Out Menu", "thegameclass-logout"),
    ));
    
}
add_action("after_setup_theme", "thegc_menu_setup");

function thegc_setup(){
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'audio',
	
	) );
}
add_action( 'after_setup_theme', 'thegc_setup' );


// remove_filter('the_content', 'wpautop');
add_post_type_support( 'page', 'excerpt' );


// function thegc_add_div( $items, $args ) {
//     $items = '' . $items . '<div data-delay="0" class="dropdown w-dropdown"></div>';
//     return $items;
// }
// add_filter( 'wp_nav_menu_items', 'thegc_add_div', 10, 2 );

function thegc_submenu_class($menu) {
    $menu = preg_replace('/ class="sub-menu"/','/ class="tgc_dropdown_shadow w-dropdown-list" /',$menu);        
    return $menu;      
}

add_filter('wp_nav_menu','thegc_submenu_class'); 


function thegc_widgets(){
  register_sidebar(array(
     'name'           => __('dashboard-sidebar', 'thegameclass'),
     'id'             => 'dashboard-sidebar',
     'description'    => __('Add widgets here to appear in the sidebar', 'thegameclass'),
     'before_widget'  => '<div id="%1$s" class="%2$s">',
     'after_widget'   => '</div>',
     'before_title'   => '<h3 class="tgc_sidebar_header_light"> ',
     'after_title'    => '</h3>',
  ));

  
  
    
}
add_action('widgets_init', 'thegc_widgets');
