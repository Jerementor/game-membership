<?php 

/**
 * The template for displaying all pages
 * Template Name: Section 2 - Pricing
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Section2-pricing.php -->

<div class="section_holder">
<div class="section-2">

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