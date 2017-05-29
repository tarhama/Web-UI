'use strict';

$(function () {

var Section5Features = (function (val) {
  
    //TEXT
    var showTitle = val.titleSec5;
    var showHeading = val.headingSec2;

    //BUTTON
    var showBtn = val.button;
    var BtnFragment = document.createDocumentFragment();
    var anchorBtn = document.createElement("a");
    anchorBtn.className = "raise-btn";

    anchorBtn.append(showBtn);
    BtnFragment.append(anchorBtn);

    //LOGOS
    var logoFrag = document.createDocumentFragment();
    var logos = val.images;
    $.each( logos, function (i, val) {
       
      var logoImg = document.createElement("img");
      logoImg.src = val.url;
      logoImg.alt = val.alt;

      logoFrag.append(logoImg);
    });

    //RENDERING
    $("#section5 .section5-title").append(showTitle); 
    $("#section5 .section5-text").append(showHeading);
    $("#section5 .state-btn").append(BtnFragment);
    $("#section5 .app-icon").append(logoFrag);

  
})(FeaturesSec5);

});