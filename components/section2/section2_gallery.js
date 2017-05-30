'use strict';

$(function () {

  var FirstGallery = (function (gall) {

    const galleryFunc = (showGallery, myGall) => {

      $.each( showGallery, function ( i, val ) {

      //IMAGE ELEMENTS IN GALLERY
      var div1 = document.createElement("div");
      div1.className = "col-md-6 theme-container";
      var div2 = document.createElement("div");
      div2.className = "theme-poster";
      var itemImg = document.createElement("img");
      itemImg.src = val.url;

      div2.append( itemImg );
      div1.append( div2 );
      myGall.append( div1 );

      });
    };
    
    //GALLERY BUTTONS
    const gallButtons = (galleryBtn, myBtn) => {

      var gallBtnAnchor = document.createElement("a");
      gallBtnAnchor.className = "page-btn";      
      gallBtnAnchor.append( galleryBtn );
      myBtn.append( gallBtnAnchor );
    };
    
    var featuredFrag = document.createDocumentFragment();
    var featuredBtn = gall.gallery[ 0 ].btn_name;

    //CALL FUNCTION TO SHOW BUTTONS
    gallButtons (featuredBtn, featuredFrag);

    //GALLERY VARIABLES
    var featuredGall = gall.gallery[ 0 ].images;
    var galleryFrag = document.createDocumentFragment();

    //CALL FUNCTION TO SHOW FIRST GALLERY
    galleryFunc (featuredGall, galleryFrag);

    //CREATE GALLERY ELEMENTS
    var homeThemeClass = $(".tabs-content");
    var tabContentItemClass = document.createElement("div");
    tabContentItemClass.className = "tab-content_item";
    var tabContentItemContainer = document.createElement("div");
    tabContentItemContainer.className = "row section2-item-container";

    tabContentItemContainer.append( galleryFrag );
    tabContentItemClass.append( tabContentItemContainer, featuredFrag );
    homeThemeClass.append( tabContentItemClass );

  
  $('.tabs').on('click', 'a', function (e) {
    e.preventDefault();

    //IMAGES
    var myTitle = this.id;
    var showGallery = gall.gallery[ myTitle ].images;
    var myGall = document.createDocumentFragment();

    //GALLERY BUTTON
    var myBtn = document.createDocumentFragment();
    var galleryBtn = gall.gallery[ myTitle ].btn_name;

    gallButtons (galleryBtn, myBtn);

    //HIGHLIGHT THIS BUTTON
    $("a").removeClass('active_class');
    $(this).addClass('active_class');

    //CALL FUNCTION TO SHOW THIS GALLERY WHICH BUTTON WAS CLICKED
    galleryFunc (showGallery, myGall);
    
    $(".section2-item-container").html( myGall );
    // $(".section2-item-container").append( myGall );
    // $(".section2-item-container").remove();
    
    $(".tab-content_item").children().last().remove();
    $(".tab-content_item").append(myBtn);
  });
  })(Section2Gallery);

});



