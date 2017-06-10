import React from 'react';
import Sedtion2TabItem from '../section2_tab_item';

const tabItems = [
  { id: 1,
    title: 'FEATURED'
  },
  { id: 2,
    title: 'ONLINE STORE'
  },
  { id: 3,
    title: 'BUSINESS'
  },
  { id: 4,
    title: 'PORTFOLIO'
  },
  { id: 5,
    title: 'PERSONAL'
  },
  { id: 6,
    title: 'EVENT'
  },
  { id: 7,
    title: 'BLOG'
  },
];

const Section2TabItems = () => {
  const tabs = tabItems.map(item =>
    <Sedtion2TabItem
      className="tab-item"
      key={String(item.id)}
      title={item.title}
    />
  );
  return (
    <nav className="section2-tab-items">
      {tabs}
    </nav>
  );
}

export default Section2TabItems;
