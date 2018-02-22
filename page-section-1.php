<?php 

/**
 * The template for displaying all pages
 * Template Name: Section 1
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Section1.php -->
<div class="section_holder">
<div class="section">
<div class="w-container">

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
<?php get_footer();