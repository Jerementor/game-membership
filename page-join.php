<?php 

/**
 * The template for displaying all pages
 * Template Name: Page Join
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Page.php -->
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

<?php get_footer();