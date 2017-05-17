'use strict';

$(function () {

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
    $("#section7 .landing-page-title").append(showTitle); 
    $("#section7 .landing-page-text").append(showHeading).append(anchorFrag);
    $("#section7 .home-apps__item-container").append(picFrag);

  })(FeaturesSec7);

});


$(function(){
  $(window).on('scroll', function() {
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
     html.clientHeight, html.scrollHeight, html.offsetHeight );

    height = height - $(window).height();

    var top = $(window).scrollTop();

    var scroll = (height - top)/(height);

    $(".home-apps__item-mid").css({top: (scroll)*220 + 'px', transitionDuration: '0.6s' });
    $(".home-apps__item-top").css({top: (scroll)*150 + 'px', transitionDuration: '0.6s' });
    $(".home-apps__item-featured").css({top: (scroll)*320 + 'px', transitionDuration: '0.6s' });

    //SECTION 5 ANIMATION
    $(".mobile-iphone").css({
      'transform': 'translateY(' + (scroll - 0.4) *200 + 'vh) rotate('+ (scroll - 1) *-30 + 'deg)',
      'transitionDuration': '0.6s'
    });
    $(".mobile-iphone02").css({
      'transform': 'translateY(' + (scroll - 0.1) *120 + 'vh) rotate('+ scroll *-15 + 'deg) ',
      'transitionDuration': '0.6s'
    });
    $(".mobile-android").css({
      'transform': 'translateY(' + (scroll - 0.2) *150 + 'vh) rotate('+ scroll *-15 + 'deg)',
      'transitionDuration': '0.6s'
    });
    $(".mobile-nexus").css({
      'transform': 'translateY(' + (scroll - 0.7) *70 + 'vh) rotate('+ (scroll - 0.5) *-25 + 'deg)',
      'transitionDuration': '0.6s'
    });

  }).trigger('scroll');
});