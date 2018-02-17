<?php 

/**
 * The template for displaying all pages
 * Template Name: Flex Container
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
      <div class="tgc_content_container">
        <div class="w-container">
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
