(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });


  timeout();

function timeout() {
  $('#currentAction').text('Listening ...');
  $('.blue').css("animation","updown 1.2s infinite ease-in-out alternate");                   
  $('.red').css("animation","updown 1.2s 0.2s infinite ease-in-out alternate");                         
  $('.yellow').css("animation","updown 1.2s 0.4s infinite ease-in-out alternate");                         
  $('.green').css("animation","updown 1.2s 0.6s infinite ease-in-out alternate");   
setTimeout(function(){   
  $('#currentAction').text('Processing ...');
  $('.blue').css("animation","sound-1 1.4s");                   
  $('.red').css("animation","sound-2 1.4s 0.25s");                         
  $('.yellow').css("animation","sound-1 1.4s 0.10s");                         
  $('.green').css("animation","sound-2 1.4s 0.15s");          
       setTimeout(function(){
         $('.blue').css("animation","finalani 0.4s");              
         $('.red').css("animation","finalani 0.4s 0.05s");      
         $('.yellow').css("animation","finalani 0.4s 0.1s");     
         $('.green').css("animation","finalani 0.4s 0.15s");
          setTimeout(function(){
            timeout();
          },550);
       }, 1190);
}, 3000);       
}

$("#container").mouseover(function(){
  $('.blue').css("animation","sound-1 1.4s infinite");                   
  $('.red').css("animation","sound-2 1.4s 0.25s infinite");                         
  $('.yellow').css("animation","sound-1 1.4s 0.10s infinite");                         
  $('.green').css("animation","sound-2 1.4s 0.15s infinite");  
  
});

})(jQuery); // End of use strict



