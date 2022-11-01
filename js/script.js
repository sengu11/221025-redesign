
  $("#search").focusin(function(){
    $(".input-box__placeholder > label").addClass("focus");
  });
  
  $("#search").focusout(function(){
    $(".input-box__placeholder > label").removeClass("focus");
  });
  
  
  
  function SliderBox1__init() {
    const swiper = new Swiper(".slider-box-1 .swiper", {
      // Optional parameters
      loop: true,


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
      // If we need pagination
      pagination: {
        el: ".rank .swiper-pagination"
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".rank .swiper-button-next",
        prevEl: ".rank .swiper-button-prev"
      }
    });
  }
  
  Rank__init();
  