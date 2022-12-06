
  $("#search").focusin(function(){
    $(".input-box__placeholder label").addClass("focus");
  });
  
  $("#search").focusout(function(){
    $(".input-box__placeholder label").removeClass("focus");
    $(this).val("");
  });
  
  
  
  function SliderBox1__init() {
    const swiper = new Swiper(".slider-box-1 .swiper", {
      // Optional parameters
      loop: true,

      autoplay:{
        delay:5000,
        disableOnInteraction : false,
        },

      // If we need pagination
      pagination: {
        el: ".slider-box-1 .swiper-pagination"
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".slider-box-1 .swiper-button-next",
        prevEl: ".slider-box-1 .swiper-button-prev"
      }
    });
  }
  
  SliderBox1__init();
  


  function Rank__init() {
    const swiper = new Swiper(".rank .swiper", {
      direction:'vertical',
      
      // Optional parameters
      loop: true,
  
      autoplay:{
      delay:2500,
      disableOnInteraction : false,
      },

    });
  }
  
  Rank__init();
  


  $('.btn span').click(function(){
    $('.btn span').removeClass('active');
    $(this).addClass('active');

    var i = $(this).parent().index();
    $('.bwrap > section').fadeOut(0);
    $('.bwrap > section').eq(i).fadeIn(0);
  });



  $(".more-rank").click(function(){
    $(this).toggleClass("down");
  });

  $(".more-rank").click(function(){
    $(".rank__full-menu").stop().fadeToggle(300);
  });



  var $window = $(window);

  $window.scroll(function(){
    var scrollTop = $window.scrollTop();

    if ( scrollTop > 0 ){
      $(".header__con").addClass("active");
    }

    else{
      $(".header__con").removeClass("active");
    }
  });