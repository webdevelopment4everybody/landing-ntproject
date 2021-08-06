<?php
	// Style CSS
	function style_enqueue() {
        wp_enqueue_style( 'swiper-bundle-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');

        wp_enqueue_style('responsive-layout-css',get_template_directory_uri().'/assets/styles/responsive-layout.css');

        wp_enqueue_style('main-css',get_template_directory_uri().'/assets/styles/main.css');

	}
    add_action( 'wp_enqueue_scripts', 'style_enqueue',80 );

    //add javascript
    function load_scripts() {
    
        wp_enqueue_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', array(), true, 'all');

        wp_enqueue_script( 'swiper-bundle-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), true, 'all');
  
        wp_enqueue_script('main', get_template_directory_uri() . '/assets/scripts/main.js', '', 1, true);
      
    }
    add_action('wp_enqueue_scripts', 'load_scripts');

    //add SVG to allowed file uploads
    function add_file_types_to_uploads($file_types){

        $new_filetypes = array();
        $new_filetypes['svg'] = 'image/svg';
        $file_types = array_merge($file_types, $new_filetypes );

        return $file_types; 
    } 
    add_action('upload_mimes', 'add_file_types_to_uploads');