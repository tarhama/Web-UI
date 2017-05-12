'use strict';

$(function () {

  var FirstGallery = (function (gall) {

    const galleryFunc = (showGallery, myGall) => {

      $.each( showGallery, function ( i, val ) {

      //IMAGE ELEMENTS IN GALLERY
      var div1 = document.createElement("div");
      div1.className = "home-themes_theme-container";
      var div2 = document.createElement("div");
      div2.className = "theme-poster";
      var itemImg = document.createElement("img");
      itemImg.src = val.url;

      div2.append( itemImg );
      div1.append( div2 );
      myGall.append( div1 );

      });
    };

    const gallButtons = (galleryBtn, myBtn) => {

      //GALLERY BUTTON
      var gallBtnAnchor = document.createElement("a");
      gallBtnAnchor.className = "page-btn";      
      gallBtnAnchor.append( galleryBtn );
      myBtn.append( gallBtnAnchor );
    };

    
    var featuredFrag = document.createDocumentFragment();
    var featuredBtn = gall.gallery[ 0 ].btn_name;
     console.log(featuredBtn);

    gallButtons (featuredBtn, featuredFrag);

    //GALLERY VARIABLES
    var featuredGall = gall.gallery[ 0 ].images;
    var galleryFrag = document.createDocumentFragment();

    //CALL FUNCTION
    galleryFunc (featuredGall, galleryFrag);

    //CREATE GALLERY ELEMENTS
    var homeThemeClass = $(".home-themes_tabs-content");
    var tabContentItemClass = document.createElement("div");
    tabContentItemClass.className = "tab-content_item";
    var tabContentItemContainer = document.createElement("div");
    tabContentItemContainer.className = "tab-content_item-container";

    tabContentItemContainer.append( galleryFrag, featuredFrag );
    tabContentItemClass.append( tabContentItemContainer );
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

    //CALL FUNCTION
    galleryFunc (showGallery, myGall);
    
    $(".tab-content_item-container").html( myGall ).append(myBtn);
  });
  })(Section2Gallery);

});



