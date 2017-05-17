'use strict';

$(function () {

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    /* SECTION 7 ANIMATE */
    if (height > 5300) {
        $('.section7 .black.opacity').addClass('tabs-transition');
        $('.section7 .gray.opacity').addClass('is-active');
    }
    /* END OF SECTION 7 ANIMATE */

});

  var Section7Features = (function (val) {

    //TEXT
    var showTitle = val.titleSec7;
    var showHeading = val.headingSec7;

    var anchorFrag = document.createDocumentFragment();
    var anchor = document.createElement("a");
    anchor.className = "landing-page-text__link";
    anchor.text = "learn more";
    anchor.href = "#";

    anchorFrag.append(anchor);

    //BACKGROUND IMAGES => PARALAX
    var backgPic = val.pictures;
    var picFrag = document.createDocumentFragment();

    $.each( backgPic, function (i, value) {

      var picDiv = document.createElement("div");
      picDiv.className = "home-apps__item" + " " + value.class;
      var picImg = document.createElement("img");
      picImg.className = "home-apps__img";
      picImg.src = value.url;

      picDiv.append(picImg);
      picFrag.append(picDiv);

    });

    //RENDERING
    $("#section7 .section7-title").append(showTitle); 
    $("#section7 .section7-text").append(showHeading).append(anchorFrag);
    $("#section7 .home-apps__item-container").append(picFrag);

  })(FeaturesSec7);

});