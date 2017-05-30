'use strict';

  var NavbarRoller = (function() {
  var $window = $(window);
  var navbarHeight = 64;
  var windowWidth = 0;
  var $body = $('body');
  var $navbar = $('nav.navbar');
  var offsetTop = 0;
  var screenWidth = 0;
  var widthLimit = 991;
  var $dropdownMenu = $navbar.find('.dropdown-menu');

  $window.resize(function() {
    windowWidth = $window.width();
    console.log(windowWidth);
    if (windowWidth > widthLimit) {
      $dropdownMenu.addClass('dropwdown-lg-center');
    }
    if (windowWidth < widthLimit) {
      $dropdownMenu.removeClass('dropwdown-lg-center');
    }
  });

  $(document).ready(function() {
    $navbar.addClass('transparent-me');
  });

  $(document).scroll(function() {
    offsetTop = $body.scrollTop();
    if(offsetTop > navbarHeight) {
      $navbar.slideDown('slow', function() {
        $navbar.removeClass('transparent-me');
        $navbar.addClass('blue-me');
        // $navbar.css('background-color', '#0275d8 !important');
      });
    } else {
      // $navbar.css('background-color', 'transparent !important');
      $navbar.removeClass('blue-me');
      $navbar.addClass('transparent-me');
    }
  });
})();

// var NavbarRoller = (function() {

//   // variables definitions
//   var scrollStart = 0;
//   var offsetTop = 86; //navbar height + border
//   var pureWhite = '#fff';
//   var almostPureWhite = 'rgba(255,255,255,0.8)';
//   var darkishGrey = '#666c70';
//   var lightishGrey = '#9ba0a3';
//   var darkestGrey = '#363b3e';
//   var navyBlue = '#2990ea';
//   var weeblyBlueUrl = 'assets/images/weebly-logo-blue.svg';
//   var weeblyWhiteUrl = 'assets/images/weebly-logo-white.svg';

//   // chaching DOM
//   var $navbar = $('.navbar');
//   var $weeblyLogo = $('.header .navbar .weebly-logo');
//   var $navbarTextItems = $('.header .navbar .list-left > li > a, .header .navbar .list .login > a');
//   var $languageIcon = $('.header .navbar .list-right .language');
//   var $arrowDown = $('.header .navbar .list-right .arrow-drop-down');
//   var $signupBtn = $('.header .navbar .list-right .signup-btn');

//   $( document ).ready(function() {
//     scrollStart = $(this).scrollTop();
//     if(scrollStart > offsetTop) {
//       $navbar.slideDown('slow', depictWhiteNavbar);
//     } else {
//       depictTransparentNavbar();
//     }
//   });

//   function depictWhiteNavbar() {
//     $navbar.css('background-color', pureWhite);
//     $weeblyLogo.attr('src', weeblyBlueUrl);
//     $navbarTextItems.css('color', darkishGrey);
//     $languageIcon.css('color', darkishGrey);
//     $arrowDown.css('color', darkishGrey);
//     $signupBtn.css({'color': '#2990ea',
//       'border': '1px solid #666c70'
//     });

//     $navbarTextItems.hover(
//       function() {
//         $(this).css('color', darkestGrey);
//       }, function() {
//         $(this).css('color', darkishGrey);
//       });
//     $languageIcon.hover(
//       function() {
//         $(this).css('color', darkestGrey);
//       }, function() {
//         $(this).css('color', darkishGrey);
//       });
//     $arrowDown.hover(
//       function() {
//         $(this).css('color', darkestGrey);
//       }, function() {
//         $(this).css('color', darkishGrey);
//       });
//     $signupBtn.hover(
//       function() {
//         $(this).css('box-shadow', 'inset 0 0 5px #666c70');
//       }, function() {
//         $(this).css({ 'border': '1px solid #666c70', 'box-shadow': 'none' });
//       });
//   }

//   function depictTransparentNavbar() {
//     $navbar.css('background-color', 'transparent');
//     $weeblyLogo.attr('src', weeblyWhiteUrl);
//     $navbarTextItems.css('color', almostPureWhite);
//     $languageIcon.css('color', almostPureWhite);
//     $arrowDown.css('color', almostPureWhite);
//     $signupBtn.css({'color': almostPureWhite,
//       'border': '2px solid #fff',
//       'box-shadow': 'none'
//     });

//     $navbarTextItems.hover(
//       function() {
//         $(this).css('color', pureWhite);
//       }, function() {
//         $(this).css('color', almostPureWhite);
//       });
//     $languageIcon.hover(
//       function() {
//         $(this).css('color', pureWhite);
//       }, function() {
//         $(this).css('color', almostPureWhite);
//       });
//     $arrowDown.hover(
//       function() {
//         $(this).css('color', pureWhite);
//       }, function() {
//         $(this).css('color', almostPureWhite);
//       });
//     $signupBtn.hover(
//       function() {
//         $(this).css('box-shadow', 'inset 0 0 5px #fff');
//       }, function() {
//         $(this).css('border', '2px solid rgba(255,255,255,0.8)');
//       });
//   }

  // $(document).scroll(function() {
  //   scrollStart = $(this).scrollTop();
  //   if(scrollStart > offsetTop) {
  //     $navbar.slideDown('slow', depictWhiteNavbar);
  //   } else {
  //     depictTransparentNavbar();
  //   }
  // });

// })();
