import React from 'react'
import Carousel from 'better-react-carousel'

import { carouselImages } from '../constants/Constants';

import "./Carousel.css"

const Gallery = () => {
  return (
      <div className="CarouselContainer">
          <div className="Carousel">
            <Carousel cols={1} rows={1} gap={10} loop showDots hideArrow>
                {carouselImages.map((image, index) => (
                    <Carousel.Item>
                        <img className="CarouselImage" width="60%" src={require(`../media/images/${image.fileName}`)} />
                    </Carousel.Item>
                ))}
            </Carousel>
          </div>
      </div>
  )
}

export default Gallery