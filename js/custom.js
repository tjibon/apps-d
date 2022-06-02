// ..............Custom JavaScript Code.................
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {

    
    
      $('.portfolio-list').owlCarousel({
         
          items: 3,
          autoplay: false,
          margin:40,
          loop: true,
           dots:false,
           nav:false,
           responsiveClass:true,
           responsive:{
               0:{
                   items:2,
                   nav:false
               },
               600:{
                   items:4,
                   nav:false
               },
               1000:{
                   items:3,
                   nav:false,
                   loop:true,
               }
           }
          
      })

      $('.m-portfolio-list').owlCarousel({
         
        items: 5,
        autoplay: false,
        margin:20,
        center: true,
        loop: true,
         dots:false,
         nav:false,
         responsiveClass:true,
         responsive:{
             0:{
                 items:2,
                 nav:false
             },
             600:{
                 items:4,
                 nav:false
             },
             1000:{
                 items:5,
                 nav:false,
                 loop:true,
             }
         }
        
    })
    $('.testimonial-carousel').owlCarousel({
           
        items: 1,
        autoplay: false,
        margin:30,
        loop: true,
         dots:true,
    });



  });

}(jQuery));