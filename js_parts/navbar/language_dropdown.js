var LanguageDropdown = (function(nav) {

  // cahing DOM
  var $icons = $('.language, .arrow-drop-down');
  var $dropdownWrapper = $('.dropdown-content');
  var $dropDown = $('.dropdown-content, .dropdown-content__chevron');

  // variables definitions
  var dropdownString ='';
  var dropdownStuff = '.language,.arrow-drop-down,.dropdown-content,.dropdown-content__chevron';
  var LanguagesArray = nav.languages;

  // rendering DOM
  LanguagesArray.forEach(function(language) {
    dropdownString += '<a href="">' + language.language + '</a>';
  });

  $dropdownWrapper.html(dropdownString);

  // event handlers
  $icons.on('click', function() {
    $dropDown.slideToggle();
  });

  $('body').click(function(e) {
    if ( !$(e.target).is(dropdownStuff)) {
      $dropDown.slideUp();
    }
  });

})(NavbarData);
