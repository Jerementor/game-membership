<?php 

/**
 * The template for displaying all pages
 * Template Name: Section 2 - Header
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Section1.php -->

<div class="section_holder">
<div class="section-2">
<div class="w-container">
<div class="tgc_div">
<h1><?php wp_title('') ?></h1>	

		<?php 
		if ( have_posts() ) {
			while ( have_posts() ) {
				the_post(); 
				//
				the_content();

				//
			} // end while
		} // end if
		?>
</div>
</div>	
</div>
</div>
<?php get_footer();