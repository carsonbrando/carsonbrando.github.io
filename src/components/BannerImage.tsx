import React from 'react';
import { Img } from 'react-image';

import bannerImage from '../media/images/IMG_0280.jpg';

import './BannerImage.css';

const Banner = () => {
  return (
        <div className="BannerContainer">
            <Img className="Banner" src={require('../media/images/IMG_0280.jpg')} alt="Banner Image" />  
        </div>
  );
};

export default Banner;
