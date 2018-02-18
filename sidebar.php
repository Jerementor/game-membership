<?php
/**
 * The sidebar containing the course menu
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Platformer
 * @version 1.0.0
 */
?>


<!--<aside id="secondary" role="complementary">-->
    

            
<div class="course_sidebar">
        <aside id="secondary" role="complementary">
            
      
 
                <?php if(is_active_sidebar('dashboard-sidebar')) : ?>
            
                            <?php dynamic_sidebar('dashboard-sidebar'); ?>
                   
                <?php endif; ?>
                
       
        </aside>   
    </div>


<!--</aside>   -->
   

