'use strict';
  
  //TITLE AND TEXT
  var ShowText = (function (val) {
   
    var showTitle = val.titleSec2;
    var showHeading = val.headingSec2;

    var titlSec2 = document.getElementById('section2').getElementsByClassName('section2-title');  
    var headSec2 = document.getElementById('section2').getElementsByClassName('section2-text');

    titlSec2[0].innerHTML = showTitle;
    headSec2[0].innerHTML = showHeading;

  })(TextSec2);

  //NAVBAR
  var showNavbar = (function (val) {
    
    var NavArray = val.buttons;
    var btnNavbar = document.createDocumentFragment();

    NavArray.forEach(function (nav) {
      
      var anchor = document.createElement('a');
      anchor.className = 'tabs_item';
      anchor.href = '#' + nav.title;
      anchor.text = nav.title;
      anchor.title = nav.title;
      anchor.id = nav.id;

      btnNavbar.appendChild(anchor);
    });

    //RENDER NAVBAR BUTTONS
    var navSec2 = document.querySelector(".tabs");
    navSec2.appendChild(btnNavbar);
 
    //HIGHLIGHT FIRST NAVBAR BUTTON
    var navActive = document.getElementsByClassName("tabs_item")[0];
    navActive.className += " active_class";
    

  })(NavbarSec2);

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    /* SECTION 2 ANIMATE */
    if (height > 500) {
        $('.home-themes .tabs-container').addClass('tabs-transition');
        $('.tabs-content').addClass('is-active');
    }
    /* END OF SECTION 2 ANIMATE */

});