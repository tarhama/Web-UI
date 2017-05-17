// 'use strict';

// var NavbarLinks = (function(nav) {
//   // cashing DOM
//   var $navbarLeft = $('.navbar__list.navbar__list--left');
//   var $logoArea = $('.navbar__list--center');
//   var $navbarRight = $('.navbar__list.navbar__list--right');

//   // variables definitions
//   var links = nav.list_item_links;
//   var logoUrl = nav.assets.logo[0].url;
//   var navAssets = nav.assets;
//   var langIcons = navAssets.language_icons;
//   var chevronTopUrl = langIcons[0].chevron_url;
//   var langLogo = navAssets.logo;
//   var rightBtns = navAssets.buttons;
//   var loginBtn = navAssets.buttons[0].name;
//   var signupBtn = navAssets.buttons[1].name;
//   var langIconUrl = navAssets.language_icons[0].icon_name;
//   var chevronUrl = navAssets.language_icons[0].chevron_url;

//   // function definitions
//   function renderLeftLinks() {
//     var htmlLinks = '';
//     $.each(links, function(i, link) {
//       htmlLinks += '<li><a href="#">' + link.name + '</a></li>';
//     });
//     $navbarLeft.html(htmlLinks);
//   }

//   // function renderMiddleLogo() {
//   //   var htmlLogo = '';
//   //   htmlLogo += '<img src="' + logoUrl + '" alt="weebly-logo" class="weebly-logo">';
//   //   $logoArea.html(htmlLogo);
//   // }

//   // function renderRightLinks() {
//   //   var htmlLinks = '';
//   //   htmlLinks += '<li class="language-link-top">';
//   //   $.each(langIcons, function(i, lang) {
//   //     htmlLinks += '<i class="material-icons language">' + lang.icon_name + '</i>';
//   //     htmlLinks += '<i class="material-icons arrow-drop-down">' + lang.chevron_name + '</i>';
//   //   });
//   //   htmlLinks += '<div class="dropdown-content"></div>';
//   //   htmlLinks += '<img src="' + chevronTopUrl + '" alt="chevron" class="dropdown-content__chevron">';
//   //   htmlLinks += '</li>';
//   //   htmlLinks += '<li class="navbar__login"><a href="#">' + loginBtn + '</a></li>';
//   //   htmlLinks += `<li class="navbar__signup">`;
//   //   htmlLinks += '<button class="navbar__signup-btn">' + signupBtn + '</button>';
//   //   htmlLinks += '</li>';
//   //   $navbarRight.html(htmlLinks);
//   // }

//   // function invocations
//   renderLeftLinks();
//   // renderMiddleLogo();
//   // renderRightLinks();

// }(NavbarData));
