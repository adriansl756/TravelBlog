
    /*------------ TOGGLE MENU -----------------*/
    $nav = $(".nav");
    $navItems = $(".nav-items");
    $social = $(".social");
    $icon = $(".fa-bars");
    $banner = $(".banner");
    $navLink = $(".nav-link");
    $scrollTop = $(".scrollTop");
    $brand = $(".nav-brand");
    $dropdown = $(".dropdown");

    $bodyWidth = $('body').width();

    $(window).resize(function() {
    if ($(window).width() >= 1000) {
        $nav.removeClass('collapse');
    }
    }).resize();

    $icon.click(function(){
      $nav.toggleClass("collapse");
    });

    $navLink.click(function(){
      $nav.removeClass('collapse');
    });

    $dropdown.click(function(){
      $nav.removeClass('collapse');
    })

    $brand.click(function(){
      $nav.removeClass('collapse');
    });





    /*------------ SCROLL TOGGLE MENU -----------------*/

    $(document).scroll(function(){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $scrollTop.toggleClass('bannerScrolled', $(this).scrollTop() > $banner.height());
    });

    /*------X----- SCROLL TOGGLE MENU --------X--------*/
