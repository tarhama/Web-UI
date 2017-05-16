'use strict';

var NavbarData = (function() {

  return {
    list_item_links: [
      { name: 'Features' },
      { name: 'Themes' },
      { name: 'Pricing' },
      { name: 'More' }
    ],
    assets: {
      logo: [
        { url: 'assets/images/weebly-logo-white.svg' }
      ],
      buttons: [
        { name: 'Log In' },
        { name: 'Sign Up' }
      ],
      language_icons: [
        { icon_name: 'language', chevron_name: 'arrow_drop_down', chevron_url: 'assets/images/chevron.svg' }
      ]
    },
    languages: [
      { language: 'Chinese', abbr: 'zh' },
      { language: 'Spanish', abbr: 'es' },
      { language: 'English', abbr: 'en' },
      { language: 'Hindi', abbr: 'hi' },
      { language: 'Arabic', abbr: 'ar' },
      { language: 'Portuguese', abbr: 'pt' },
      { language: 'Bengali', abbr: 'bn' },
      { language: 'Russian', abbr: 'ru' },
      { language: 'Japanese', abbr: 'ja' },
      { language: 'Javanese', abbr: 'jv' }
    ]
  }

}());
