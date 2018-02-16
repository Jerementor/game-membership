<?php
//Loading in Scripts
function plat_enqueue_styles(){
    wp_enqueue_script('webflow-js', get_template_directory_uri() . '/assets/js/webflow.js', array('jquery'));

    
    wp_enqueue_style("normalize",  get_template_directory_uri() . "/assets/css/normalize.css");
    wp_enqueue_style("webflow",  get_template_directory_uri() . "/assets/css/webflow.css");
    wp_enqueue_style("jerementor",  get_template_directory_uri() ."/assets/css/thegameclass.webflow.css");
    wp_enqueue_style("jerementor-style", get_stylesheet_uri());
    
}
add_action("wp_enqueue_scripts", "plat_enqueue_styles");

function plat_menu_setup(){
    
    // //Registers custom primary nav menu 
    // register_nav_menus( array(
    //     'primary'       => __("Primary Menu", "platformeracademy"),
    //     'logged-in'     => __("Logged-In Menu", "platformeracademy-login"),
    //     'logged-out'    => __("Logged-Out Menu", "platformeracademy-logout"),
    //     'dash-board'     => __("Dashboard Menu", "platformeracademy-dashboard"),
    // ));
    
}
add_action("after_setup_theme", "plat_menu_setup");

function platformeracademy_setup(){
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
add_action( 'after_setup_theme', 'platformeracademy_setup' );


// remove_filter('the_content', 'wpautop');
add_post_type_support( 'page', 'excerpt' );