/*****************************************************************
*
* Project Name:Robo Theme.
* description: a Multi-purpose one-page theme for createve, corporates and business uses;
* version: 1.0  
*               
*****************************************************************/

$(function () {
  "use strict";

  //GLOBAL VARIBALES
  var bdy = $("body"), navMain = $("nav.main-navbar"),
    navMobile = $("nav .navbar-mobile-menu-wrapper"),
    backToTopButton = $(".to-top-div"),
    optionBoxWraper = $(".option-box .options-wraper");



  /*                   START GENERAL FUNCTIONS                   */

  $(bdy).scrollspy({
    target: navMain,
    // offset: navMain.innerHeight()
    offset: Math.ceil(navMain.innerHeight())

  });



  //Global function To Change icons acording the state of the container element
  function iconChanger(ele, primaryClass, secondryClass) {
    if ($(ele).hasClass(primaryClass)) {
      $(ele).removeClass(primaryClass).addClass(secondryClass);
    }
    else if ($(ele).hasClass(secondryClass)) {
      $(ele).removeClass(secondryClass).addClass(primaryClass)
    }
    ;
  }
  /*                    END GENERAL FUNCTIONS                   */


  //hide the navbar when click out side the menu

  $(navMobile).on("click", function () {
    if ($(this).hasClass('mobile-navbar-show')) {
      $(this).removeClass('mobile-navbar-show');
    }
    if ($('.menu-opend-btn').hasClass('menu-closed-btn')) {
      $('.menu-opend-btn').removeClass('menu-closed-btn')
    }

    if ($('body').hasClass('no-scroll')) {
      $('body').removeClass('no-scroll')
    } else {
      $('body').addClass('no-scroll')

    }
  }
  ); //  to change the .navbar-toggler button icon
  $('.navbar .menu-opend-btn ').on("click", function () {
    // to make the bg-color of the nav-bar match the bg-color of the mobile-menu when its opend 
    if ($(navMain).hasClass('bg-transparent')) {
      $(navMain).removeClass('bg-transparent').addClass('bg-dark');
    }
    else {
      // $(navMain).removeClass('bg-dark').addClass('bg-transparent');
    }
  }
  ); //stop the click event on the menu items from closing the menu
  $('nav .navbar-mobile-menu').on("click", function (e) {
    e.stopPropagation()
  }
  ); //initialize swiper [testmonial Section] when document ready
  var testmonialsSlider = new Swiper('.testmonials .swiper-container', {
    // Optional parameters
    speed: 500,
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    }
    , navigation: {
      nextEl: '.testmonials .swiper-button-next', prevEl: '.testmonials .swiper-button-prev',
    }
  }
  );

  //initialize swiper [partners Section] when document ready
  var partenersSlider = new Swiper('.partners .swiper-container', {
    // Optional parameters
    speed: 600,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    }
    , //showing 6 logo items in screen larger than 991px wide
    slidesPerView: 6, breakpoints: {
      // showing only 3 logo items in screens smaller than 991px wide
      991: {
        slidesPerView: 3
      }
    }
    ,
  }

  );


  // gallery fancy box initializer
  $().fancybox({
    selector: '[data-fancybox=".filter"]:visible', loop: true, buttons: ['zoom', 'close'],
  }
  );


  $("nav .menu-opend-btn").on("click", function () {
    $(navMobile).toggleClass('mobile-navbar-show');
    $('.menu-opend-btn').toggleClass('menu-closed-btn')

    if ($('body').hasClass('no-scroll')) {
      $('body').removeClass('no-scroll')
    } else {
      $('body').addClass('no-scroll')

    }
  }
  ); // 
  /*>>>>>>>>>>>>>>>>>>>>>>>>  Start Window Resize functions  <<<<<<<<<<<<<<<<<<<<<<<<*/
  $(window).on('resize', function () {
    // add or remove the .navbar-mobile-menu-wrapper class according the window size
    if ($(window).innerWidth() > 991) {
      //remove the .navbar-mobile-menu-wrapper if window innerWidth More than 991px
      if ($('.navbar-menu-wrapper').hasClass('navbar-mobile-menu-wrapper')) {
        $('.navbar-menu-wrapper').removeClass('navbar-mobile-menu-wrapper')
      }
    }
    else {
      //add the .navbar-mobile-menu-wrapper if window innerWidth less than 991px
      if (!$('.navbar-menu-wrapper').hasClass('navbar-mobile-menu-wrapper')) {
        $('.navbar-menu-wrapper').addClass('navbar-mobile-menu-wrapper')
      }
    }
  }
  )
  /*                   End  Window Resize functions                   */

  /*                   Start Soomth Scrolling functions                   */


  // 1- Start Smooth Scrolling To page Sections
  $(".navbar .nav-link").on("click", function (e) {
    e.preventDefault();

    var link = $(this).attr("href");
    $("html,body").animate({
      // using Math.ceil To get rid Of the fractions of the values 
      scrollTop: Math.ceil($(link).offset().top) - Math.ceil(navMain.innerHeight()) + 1
    }, 1000);

  });

  //End Smooth Scrolling To page Sections


  //2- Start Smooth Scrolling To Window Top When Clicking on Back To Top Button
  $(backToTopButton).on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  }); //End Smooth Scrolling To Window Top When Clicking on Back To Top Button

  /*                   End Soomth Scrolling functions                   */


  // Adjust navbar transparency At Window Loading
  if ($(navMain).hasClass("bg-transparent") && $(window).innerWidth() <= 991) {
    $(navMain).removeClass("bg-transparent").addClass('bg-dark');
  }
  else if ($(navMain).hasClass("bg-transparent") && $(window).innerWidth() > 991 && $(window).scrollTop() > 50) {
    $(navMain).removeClass("bg-transparent").addClass('bg-dark');
  }
  /*              Start Window scroll functions               */
  var lastScrollTop = 0;
  $(window).on('scroll', function () {

    //Start show/hide navbar
    /* To have more space on mobile screen ==> the nav bar will hide in scrolling down and show-up again when scrolling up.*/
    //On screens  less than 992px Width
    // if ($(this).innerWidth() <= 991) {
    //   // To be SURE when the navbar menu is showed-up by pressing the navbar button the navbar will not hiding
    //   if (!$(navMobile).hasClass('mobile-navbar-show') ) {
    //     if ($(this).scrollTop() > lastScrollTop) {//determine the window dirction on scrolling
    //       $(navMain).hide();
    //     }
    //     else {
    //       $(navMain).show();
    //     }
    //     lastScrollTop = $(window).scrollTop();
    //   }
    // } else if ($(this).innerWidth() > 991) { //to insure that the navbar always showen in larg sceerns
    //   $(navMain).show();
    // }
    if ($(this).scrollTop() > 50) {
      //to change the tranceparency of the navbar at window scrolling
      if ($(navMain).hasClass('bg-transparent')) $(navMain).removeClass('bg-transparent').addClass('bg-dark');
    }
    else {
      $(navMain).addClass('bg-transparent').removeClass('bg-dark');
    } //Start show/hide back to top button
    if ($(this).scrollTop() > 50) {
      backToTopButton.fadeIn(600)
    }
    else {
      backToTopButton.fadeOut(600);
    } //End show/hide back to top button
  }
  );
  /*              End Window scroll functions               */
  /*             Start Images Filter              */
  $('.gallery .filter-btn').on('click', function () {
    //add .activ class on the clicked .filter-btn and remove it from other .filter-btns
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('target') === 'all') {
      //showing all thumbials pictures in the gallery
      $('.filter-group a.pic-link, .filter-group .info-link').removeClass('disabled-element').addClass('enabled-element');
      $('.filter-group a.pic-link').attr('data-fancybox', '.filter');
    }
    else {
      //showing specific thumbials pictures in the gallery acording to the btn clicked
      //1- disable all pic-links
      $('.filter-group  .pic-link').removeClass('enabled-element').addClass('disabled-element').attr('data-fancybox', ''); //2- disable all .hidden-info link
      $('.filter-group  .hidden-info').removeClass('enabled-element').addClass('disabled-element'); //3- enable only the choosen pic-links
      $($(this).data('target')).removeClass('disabled-element').addClass('enabled-element').attr('data-fancybox', '.filter'); //4- enable only the .hidden-info div of the choosen pic-links
      $($(this).data('target')).siblings('.hidden-info').removeClass('disabled-element').addClass('enabled-element');
    }
  }
  );
  /*               End Images Filter              */
  /*              Start show/hide tab-content              */
  $(".about-us .tab-list .tab-head").on("click", function () {
    // Show the wanted .tab-content and hide its sibilings
    var target = $(this).attr("data-target");
    $(target).fadeIn(600).siblings(".tab-content").hide(); // add .active   class on the clicked tab-head only
    $(this).addClass("active").siblings().removeClass("active");
  }
  );
  /*             End show/hide tab-content              */
  /*                          Start show/hide Option Box                          */
  $(".box-handel").on("click", function () {
    $(this).parent().toggleClass('show-options-box'); //  change .box-handel icon
    iconChanger($(this).find('.fa'), 'fa-cog', 'fa-times')
  }
  );
  $(optionBoxWraper).on("click", function (e) {
    e.stopPropagation()
  }
  ); //hide the option-box when click out side the option-box
  $(bdy).on("click", function (e) {
    if ($(optionBoxWraper).hasClass('show-options-box')) {
      $(optionBoxWraper).removeClass('show-options-box') //change .box-handel icon
      iconChanger($(this).find('.box-handel .fa'), 'fa-cog', 'fa-times')
    }
  }
  );
  /*                       End show/hide Option Box                      */
  // Changing the page layout colors
  $('.option-box li span').on('click', function () {
    var path = $(this).data('path');
    $('#page-style').attr('href', path);
  }
  );
  /*************** Start Loading Screen   */
  $(window).on("load", function () {
    function removeloadingScreen() {
      $(".loading-screen").fadeOut(500);
    } // $(bdy).css('overflow', 'auto');
    setInterval(removeloadingScreen, 100);
  }
  );
  /*************** End Loading Screen   */


}

);