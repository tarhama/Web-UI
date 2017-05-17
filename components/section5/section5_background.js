'use strict';

$(function () {

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    
    //AFTER LOAD OR REFRESH PAGE AND SCROLLING TO THIS SECTION
    /* SECTION 5 ANIMATE */
    if (height > 3800) {
        $('.section5 .section5-text.opacity').addClass('is-active');
        $('.section5 .section5-title.opacity').addClass('tabs-transition');
        $('.section5 .state-btn.opacity').addClass('btn-active');
        $('.section5 .app-icon.opacity').addClass('app-active');
    }
    /* END OF SECTION 5 ANIMATE */
});

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

    $(".section5 .section5-container").append(phoneFrag);
  })(FeaturesSec5);
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

    //SECTION 5 ANIMATION WHEN SCROLLING
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