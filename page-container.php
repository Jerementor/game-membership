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
<div class="tgc_minvh tgc_whitesmoke">
    <div class="tgc_content_container">
      <div class="w-container">
        <div class="tgc_div_white">	
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
</div>
</div>

<?php get_footer();
