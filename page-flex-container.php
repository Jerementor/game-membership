<?php 

/**
 * The template for displaying all pages
 * Template Name: Container
 * 
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<div class="tgc_flex_wrapper tgc_flex_center">
	<div class="tgc_flex_div">
		<?php
			if ( have_posts() ) :

				/* Start the Loop */
				while ( have_posts() ) : the_post();

			        the_content();

				endwhile;

			endif;
			?>			
	</div>
</div>

<?php get_footer();
