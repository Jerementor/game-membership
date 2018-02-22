<?php 

/**
 * The template for displaying all pages
 * Template Name: Section 2 - Comments
 *
 * @package GameMembership
 * @since 1.0
 */

get_header(); 

?>
<!-- Section2.php -->

<div class="section_holder">
<div class="section-2">
<div class="w-container">
<div class="tgc_div">

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
<?php if (strpos($_SERVER['REQUEST_URI'], "entry" || "idea-library/entry") !== false) : ?>
<div class="section">
	<div class="w-container">
		<div class="tgc_div">
        	<?php get_template_part('template-parts/comments/disqus'); ?>
		</div>
	</div>
</div>
<?php endif; ?>

</div>
<?php get_footer();