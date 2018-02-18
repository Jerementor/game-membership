<?php 

/**
 * The template for displaying all pages
 * Template Name: Flex Container (Dash -- Sidebar)
 * 
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
  <div class="tgc_flex_wrapper">
  	    <div class="tgc_flex_sidebar_light">
  	    	<?php get_sidebar(); ?>
  	    </div>
  	   <div class="tgc_flex_content_light">
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
