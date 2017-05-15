'use strict';

$(function () {

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

      btnNavbar.appendChild(anchor);
    })

    $(".tabs")[ 0 ].appendChild(btnNavbar);

  })(NavbarSec2);  

});