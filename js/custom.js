$(function () {
    //    navbar js
  $("#bar").click(function () {
        $(".navbar-nav").toggle();
    });
    
    $("#search").click(function () {
        $(".search-box").show();
    });
    $(".closebtn").click(function () {
        $(".search-box").hide();
    });
    //    sticky menu
    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $(".navbar").addClass('sticky');
        } else {
           $(".navbar").removeClass("sticky");
       }

    });
    //    SmoothScroll
//    var scroll = new SmoothScroll('a[href*="#"]', {
//        speed: 500,
//        offset: 95,
//        clip: true,
//    });

    //  venobox js
    $('.venobox').venobox();

   
    
    //  services slide
    $(".ser-slide").slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
         responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
                        

           
           

  ]
    });
    //    portfolio slide
    $(".prot-active").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".prot-angle-right",
        nextArrow: ".prot-angle-left",
         responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
             {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                   
                }
    },
                        

           
           

  ]

    });
    //    testimonial slide
    $(".testi-slide").slick({
        slidesToShow: 2,
        arrows: true,
        prevArrow: ".testi-angle-right",
        nextArrow: ".testi-angle-left",
        responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    infinite: true,
                   dots: true,
                   
                }
    },
                        

           
           

  ]
    });
    //    blog slide
    $(".blog-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".blog-angle-right",
        nextArrow: ".blog-angle-left",
         responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
               {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                   
                }
    },
                        

           
           

  ]
    });
    
//    footer-area back to btn js
    $(".scroll-btn").click(function(){
        event.preventDefault();
        
        $("html,body").animate({
            scrollTop: 0,
        }, 5000);
    });

    
//    wow. js
    
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


});
