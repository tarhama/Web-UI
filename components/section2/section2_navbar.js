'use strict';

$(function () {

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    /* SECTION 2 ANIMATE */
    if (height > 500) {
        $('.home-themes .home-themes_tabs-container').addClass('tabs-transition');
        $('.home-themes_tabs-content').addClass('is-active');
    }
    /* END OF SECTION 2 ANIMATE */

});

  //TITLE + TEXT
  var ShowText = (function (txt) {

    var showTitle = txt.titleSec2;
    var showHeading = txt.headingSec2;

    $("#section2 .section2-title").append(showTitle);
    $("#section2 .section2-text").append(showHeading);
  })(TextSec2);

  //NAVBAR
  var ShowNavbar = (function (navb) {
  var NavArray = navb.buttons;
  var btnNavbar = document.createDocumentFragment();

    $.each( NavArray, function ( i, val ) {

      var anchor = document.createElement('a');
      anchor.className = 'tabs_item';
      anchor.href = '#' + val.title;
      anchor.text = val.title;
      anchor.title = val.title;
      anchor.id = val.id;

      btnNavbar.append(anchor);
    })

    $(".tabs").append(btnNavbar);

    //HIGHLIGHT FIRST NAVBAR BUTTON
    $("a:first-child").addClass('active_class');

  })(NavbarSec2);  

});