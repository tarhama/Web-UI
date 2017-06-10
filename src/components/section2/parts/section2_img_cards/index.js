import React from 'react';
import Section2ImgCard from '../section2_img_card';

const GALLERY_URLS = [
  { id: 1,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg',
    title: 'modern&elegant'
  },
  { id: 2,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/57e0699c2e247_tablet_1x.jpg',
    title: 'table4two'
  },
  { id: 3,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/57e069f339117_tablet_1x.jpg',
    title: 'plants'
  },
  { id: 4,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/57e0698bd8212_tablet_1x.jpg',
    title: 'explore 14K'
  },
  { id: 5,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/588a9437ed5eb_tablet_1x.jpg',
    title: 'creative director'
  },
  { id: 6,
    url: 'http://cdn1.editmysite.com/merchandised-screenshots/57e067d941a6e_tablet_1x.jpg',
    title: 'designing typography'
  }
];

const Section2ImgCards = () => {
  const imgList = GALLERY_URLS.map(card =>
    <Section2ImgCard
      className="img-item"
      key={String(card.id)}
      url={card.url}
      title={card.title}
    />
  );
  return (
    <div className="section2-img-cards">
      {imgList}
    </div>
  );
};

export default Section2ImgCards;
