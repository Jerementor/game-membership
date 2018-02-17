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


<aside id="secondary" role="complementary">
    
<div class="tgc_sidebar_group">
        <ul class="tgc_sidebar_ul w-list-unstyled">
    <?php
        if(is_active_sidebar('dashboard-sidebar')){
            dynamic_sidebar('dashboard-sidebar');
        }
    ?>
  </ul>
    </div>
</aside>   
   

