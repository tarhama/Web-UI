import React, { Component } from 'react';
import classNames from 'classnames';
import { gallery } from '../../section2_store/index';
import './index.scss';

class Section2Gallery extends Component {
  static fetchImageSetByID(data, id) {
    return (data.find(imgSet => imgSet.id === id)).images;
  }
  static fetchTabs(data) {
    return (data.map(imgSet => imgSet.btn));
  }
  static getIdFromTabItem(className) {
    const startPoint = className.indexOf('?') + 1;
    const endPoint = className.lastIndexOf('?');
    const imgId = Number(className.substring(startPoint, endPoint));
    return imgId;
  }
  constructor() {
    super();

    this.state = {
      activeTabID: 1,
      activeImageSet: []
    };
    this.renderTabs = this.renderTabs.bind(this);
  }
  componentWillMount() {
    const initialImgSet = Section2Gallery.fetchImageSetByID(gallery, 1);
    this.setState({ activeImageSet: initialImgSet });
  }
  renderTabs(tab, index) {
    const { activeTabID } = this.state;
    const tabClass = classNames({
      'tab-item': true,
      [`?${index + 1}?`]: true,
      'active-tab': ((index + 1) === activeTabID),
    });
    return (
      <a
        className={tabClass}
        key={tab.id}
        onClick={(e) => {
          const currentTab = e.target;
          const fullClassName = currentTab.className;
          classNames
          const imgSetId = Section2Gallery.getIdFromTabItem(fullClassName);
          const activeImageSet = Section2Gallery.fetchImageSetByID(gallery, imgSetId);
          this.setState({ activeImageSet, activeTabID: tab.id });
        }}
        >
        {tab.name}
      </a>
    );
  }
  renderCards(imageItem) {
    return (
      <div className="card img-item" key={imageItem.id}>
        <img src={imageItem.url} alt={imageItem.title}/>
      </div>
    );
  }
  render() {
    if (!this.state) {
      return <div>loading...</div>
    }
    const { activeImageSet } = this.state;
    const imageSet = activeImageSet.map(set => set);
    const allTabs = Section2Gallery.fetchTabs(gallery);
    return (
      <div className="section2-gallery">
        <nav className="section2-tab-items">
          {allTabs.map(this.renderTabs)}
        </nav>
        <div className="section2-img-cards">
          {imageSet.map(this.renderCards)}
        </div>
      </div>
    );
  }
}

export default Section2Gallery;
