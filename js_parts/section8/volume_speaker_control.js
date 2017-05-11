var VolumeSpeakersControl = (function(data8) {
  // chaching DOM
  var $section8 = $('#section8');
  var $videoContainer = $('.video-container');
  var $video = $videoContainer.find('video');
  var $videoSrc = $video.find('source');
  var $sentence = $('.text-container__statement');
  var $quotation = $('.text-container__quotation');
  var $speakerName = $('.text-container__quotation-person');
  var $volumeIcon = $videoContainer.find('img');
  var $navbarDots = $('.navbar-dots');
  var $firstDot = $('.navbar-dots__first');
  var $secondDot = $('.navbar-dots__second');
  var $thirdDot = $('.navbar-dots__third');

  // variables with data from section8.js
  var people = data8.people;
  var icons = data8.icons;

  var iconUrls = icons.map(function(icon) {
    return icon.url;
  });
  var videoUrls = people.map(function(person) {
    return person.video_url;
  });
  var quotations = people.map(function(person) {
    return person.quotation;
  });
  var names = people.map(function(person) {
    return person.name;
  });

  var volumeUpIcon = iconUrls[0];
  var volumeDownIcon = iconUrls[1];
  var videoUrl1 = videoUrls[0];
  var videoUrl2 = videoUrls[1];
  var videoUrl3 = videoUrls[2];
  var quotation1 = quotations[0];
  var quotation2 = quotations[1];
  var quotation3 = quotations[2];
  var name1 = names[0];
  var name2 = names[1];
  var name3 = names[2];

  // function definitions
  function switchVolume() {
    if ($volumeIcon.attr('src') === volumeDownIcon) {
      $volumeIcon.attr('src', volumeUpIcon);
      $video.prop('muted', false);
    } else {
      $volumeIcon.attr('src', volumeDownIcon);
      $video.prop('muted', true);
    }
  }

  function renderContent(videoUrl, quotation, speaker) {
    if (!$(this).hasClass('active-dot')) {
      $video.add($quotation).add($sentence).add($speakerName).fadeOut(function() {
        $video[0].load();
        $videoSrc.attr('src', videoUrl);
        $(this).addClass('active-dot');
        $(this).siblings().removeClass('active-dot');
        $quotation.text(quotation);
        $speakerName.text(speaker);
      }.bind(this)).fadeIn();
    }
  }

  // event handlers
  $videoContainer.on('click', switchVolume);

  $firstDot.on('click', function(event) {
    event.preventDefault();
    renderContent.call(this, videoUrl1, quotation1, name1);
  });

  $secondDot.on('click', function(event) {
    event.preventDefault();
    renderContent.call(this, videoUrl2, quotation2, name2);
  });
  $thirdDot.on('click', function(event) {
    event.preventDefault();
    renderContent.call(this, videoUrl3, quotation3, name3);
  });

})(Section8Data);
