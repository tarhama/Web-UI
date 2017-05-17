'use strict';

var LanguageDropdown = (function(nav) {

  // cahing DOM
  var $icons = $('.header .navbar .list-right .language, .header .navbar .list-right .arrow-drop-down');
  var $dropdownWrapper = $('.header .navbar .list-right .dropdown-content');
  var $chevronTop = $('.header .navbar .list-right .chevron-up');
  var $dropDown = $('.header .navbar .list-right .dropdown-content, .header .navbar .list-right .chevron-up');

  // variables definitions
  var dropdownString ='';
  var dropdownStuff = '.header .navbar .list-right .language, .header .navbar .list-right .arrow-drop-down, .header .navbar .list-right .dropdown-content, .header .navbar .list-right .chevron-up';
  var LanguagesArray = nav.languages;

  // rendering DOM
  LanguagesArray.forEach(function(language) {
    dropdownString += '<a href="">' + language.language + '</a>';
  });

  $dropdownWrapper.html(dropdownString);

  // event handlers
  $icons.on('click', function() {
    if ($chevronTop.hasClass('rolled_down')) {
      $dropDown.slideUp();
      $chevronTop.removeClass('rolled_down');
    } else {
      $chevronTop.addClass('rolled_down');
      $dropDown.slideDown();
    }
  });

  $('body').click(function(e) {
    if ( !$(e.target).is(dropdownStuff)) {
      $dropDown.slideUp();
      $chevronTop.removeClass('rolled_down');
    }
  });

})(NavbarData);
