import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import BA1 from '../assets/DJob/BA1.jpeg'
import BA2 from '../assets/DJob/BA2.jpeg'
// import BA3 from '../assets/DJob/BA3.jpeg'
// import './Carousel.scss'
export default function CarouselPage () {
  return (
    <Carousel>
      <div>
        <img src={BA1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={BA2} />
        <p className="legend">Legend 2</p>
      </div>
      {/* <div>
        <img src={BA3} />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  )
};
