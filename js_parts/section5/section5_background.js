'use strict';

$(function () {
  var PhonesSec5 = (function (val) {

    var backgPhones = val.phones;
    var phoneFrag = document.createDocumentFragment();

    $.each( backgPhones, function (i, value) {

      var mobileDiv = document.createElement("div");
      mobileDiv.className = "mobile-item" + " " + value.class;
      var mobilImg = document.createElement("img");
      mobilImg.className = "home-apps__img";
      mobilImg.src = value.url;

      mobileDiv.append(mobilImg);
      phoneFrag.append(mobileDiv);

    });

    $("#section5 .landing-page-container").append(phoneFrag);
  })(FeaturesSec5);
});