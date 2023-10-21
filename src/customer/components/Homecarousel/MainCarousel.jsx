import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { MainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {
    const item = MainCarouselData.map((item) => <img
        className="cursor-pointer -z-10" alt="" role="presentation" src={item.imageUrl} />)

    return (
        <AliceCarousel
            mouseTracking
            items={item}
            autoPlay
            disableButtonsControls
            autoPlayInterval={1000}
            infinite
        />
    )
}

export default MainCarousel 