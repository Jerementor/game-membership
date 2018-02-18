<?php 

/**
 * The template for displaying all pages
 * Template Name: Grey Container (Login -- No Sidebar)
 * 
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
  <div class="tgc_minvh tgc_whitesmoke tgc_top_flex">
		<?php
			if ( have_posts() ) :

				/* Start the Loop */
				while ( have_posts() ) : the_post();

			        the_content();

				endwhile;

			endif;
			?>			
</div>

<?php get_footer();
