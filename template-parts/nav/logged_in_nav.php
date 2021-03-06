<div class="tgc_blue_topbar"></div>
<div data-collapse="medium" data-animation="default" data-duration="1000" class="tgc_navbar_light w-nav">
<div class="w-container">
  <a href="/" class="w-nav-brand">
    <h3 class="tgc_brand_light">The Game Class</h3>
    
  </a>
  

    <nav role="navigation" class="nav-menu w-nav-menu">
      <?php get_template_part( 'template-parts/nav/nav_in'); ?> 
      
      <?php if(!is_page_template('page-join')) : ?>
        <div data-delay="0" class="dropdown w-dropdown">
          <div class="dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>Hi, <?php echo do_shortcode(' [mepr-account-info field="first_name"]'); ?></div>
          </div>
          <nav role="secondary" class="tgc_dropdown_shadow w-dropdown-list sub-menu">
            <?php get_template_part('template-parts/nav/drop_down'); ?>
          </nav>
        </div>
     <?php endif; ?>
     
     </nav>
     </nav>
     
      <div class="menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
      
    </div>
  </div>