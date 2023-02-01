import React from 'react';
import BannerImage from './BannerImage';
import Carousel from './Carousel';

import './Home.css';

const Home = () => {
    return (
        <div className="Main">
            <BannerImage />
            <Carousel />
        </div>
    )
}

export default Home;