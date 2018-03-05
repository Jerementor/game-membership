<?php 

/**
 * The template for displaying all lectures
 * @package WPShipyard
 * @since 1.0
 */

get_header(); 

?>
<!--Using SINGLE-LESSON-->
<div class="section_holder_grey">
    <div class="section-no-top-padding">
        <div class="w-container">
            <div class="tgc_div">
                   <div class="lesson_wrapper">
                        <?php if (get_field('show_title')) :?>
                            <h2 class="blog_title"><?php wp_title(''); ?></h2>
                        <?php endif; ?>
                    
                         <?php if ( have_posts() ) : ?>
                            <?php while ( have_posts() ) : the_post(); ?>
                                
                                <!--Lecture Video-->
                                <?php if (get_field('lecture_video') && get_field('does_this_lecture_have_a_video')) :?>
                                    <div class="embed-container">
                                        <?php the_field('lecture_video'); ?> 
                                    </div>
                                <?php endif; ?>
                                
                                <!--Lecture Text-->
                                <?php if (get_field('lecture_text') && get_field('is_this_lecture_a_text_lecture')) :?>
                                    <?php the_field('lecture_text'); ?> 
                                <?php endif; ?>
                                
                                <!--Lesson Description-->
                                <?php if (get_field('lesson_description') && get_field('does_this_lesson_have_a_description')) :?>
                                    <?php the_field('lesson_description'); ?> 
                                <?php endif; ?>
            
                    
                   <div class="button_center next_lecture_div w-clearfix">
                        <?php if (get_field('does_this_lecture_have_nextprev_links')) :?>
                                <!--Previous Lecture Link-->
                                <?php if (get_field('prev_lecture_link')) :?>
                                    <a href="<?php the_field('prev_lecture_link'); ?>"  class="button_short prev_lecture w-button">Previous Lecture</a> 
                                <?php endif; ?>
                                
                                <!--Next Lecture Link-->
                                <?php if (get_field('next_lecture_link')) :?>
                                     <a href="<?php the_field('next_lecture_link'); ?>" class="button_short next-lecture w-button">Next Lecture</a> 
                                <?php endif; ?> 
                                
                        <?php endif; ?>              
                    </div>
            
                        <?php endwhile; ?>
                        <?php endif; ?>
                </div>
            </div>
            
        </div>
    </div>
    <div class="section-60-top-padding">
    	<div class="w-container">
    		<div class="tgc_div">
            	<?php get_template_part('template-parts/comments/disqus'); ?>
    		</div>
    	</div>
    </div>    
</div>
<!--end flex wrapper-->