'use strict';

var NavbarRoller = (function() {

  // variables definitions
  var scrollStart = 0;
  var offsetTop = 86; //navbar height + border
  var pureWhite = '#fff';
  var almostPureWhite = 'rgba(255,255,255,0.8)';
  var darkishGrey = '#666c70';
  var lightishGrey = '#9ba0a3';
  var darkestGrey = '#363b3e';
  var navyBlue = '#2990ea';
  var weeblyBlueUrl = 'assets/images/weebly-logo-blue.svg';
  var weeblyWhiteUrl = 'assets/images/weebly-logo-white.svg';

  // chaching DOM
  var $navbar = $('.navbar');
  var $weeblyLogo = $('.weebly-logo');
  var $navbarTextItems = $('.navbar__list--left > li > a, .navbar__list .navbar__login > a');
  var $languageIcon = $('.language');
  var $arrowDown = $('.arrow-drop-down');
  var $signupBtn = $('.navbar__signup-btn');

  $( document ).ready(function() {
    scrollStart = $(this).scrollTop();
    if(scrollStart > offsetTop) {
      $navbar.slideDown('slow', depictWhiteNavbar);
    } else {
      depictTransparentNavbar();
    }
  });

  function depictWhiteNavbar() {
    $navbar.css('background-color', pureWhite);
    $weeblyLogo.attr('src', weeblyBlueUrl);
    $navbarTextItems.css('color', darkishGrey);
    $languageIcon.css('color', darkishGrey);
    $arrowDown.css('color', darkishGrey);
    $signupBtn.css({'color': '#2990ea',
      'border': '1px solid #666c70'
    });

    $navbarTextItems.hover(
      function() {
        $(this).css('color', darkestGrey);
      }, function() {
        $(this).css('color', darkishGrey);
      });
    $languageIcon.hover(
      function() {
        $(this).css('color', darkestGrey);
      }, function() {
        $(this).css('color', darkishGrey);
      });
    $arrowDown.hover(
      function() {
        $(this).css('color', darkestGrey);
      }, function() {
        $(this).css('color', darkishGrey);
      });
    $signupBtn.hover(
      function() {
        $(this).css('box-shadow', 'inset 0 0 5px #666c70');
      }, function() {
        $(this).css({ 'border': '1px solid #666c70', 'box-shadow': 'none' });
      });
  }

  function depictTransparentNavbar() {
    $navbar.css('background-color', 'transparent');
    $weeblyLogo.attr('src', weeblyWhiteUrl);
    $navbarTextItems.css('color', pureWhite);
    $languageIcon.css('color', pureWhite);
    $arrowDown.css('color', pureWhite);
    $signupBtn.css({'color': pureWhite,
      'border': '2px solid #fff'
    });

    $navbarTextItems.hover(
      function() {
        $(this).css('color', pureWhite);
      }, function() {
        $(this).css('color', almostPureWhite);
      });
    $languageIcon.hover(
      function() {
        $(this).css('color', pureWhite);
      }, function() {
        $(this).css('color', almostPureWhite);
      });
    $arrowDown.hover(
      function() {
        $(this).css('color', pureWhite);
      }, function() {
        $(this).css('color', almostPureWhite);
      });
    $signupBtn.hover(
      function() {
        $(this).css('box-shadow', 'inset 0 0 5px #fff');
      }, function() {
        $(this).css('border', '2px solid rgba(255,255,255,0.8)');
      });
  }

  $(document).scroll(function() {
    scrollStart = $(this).scrollTop();
    if(scrollStart > offsetTop) {
      $navbar.slideDown('slow', depictWhiteNavbar);
    } else {
      depictTransparentNavbar();
    }
  });

})();
