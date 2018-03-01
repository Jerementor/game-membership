<?php 

/**
 * The template for displaying all pages
 * Template Name: Blank - No Top Padding
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Blank - No Top Padding.php -->
<div class="section_holder_blank">
<div class="section-no-top-padding">

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
<?php get_footer();