import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, SetActiveIndex] = useState(0);
    const nextSlide = () => { SetActiveIndex(activeIndex + 1) }
    const prevSlide = () => {
        SetActiveIndex(activeIndex - 1)
    }
    const syncSlide = ({ item }) => {

        SetActiveIndex(item);
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
   

    return (
<div className='border'>

<h2 className='text-2x1 font-extrabold text-gray-800 py-5'>{sectionName}</h2>
        <div className=' px-4 lg:px-8 border border-black'>
            <div className='relative p-5'>
                <AliceCarousel

                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChange={syncSlide}
                />

                {activeIndex !== items.length - 5 && <Button className='z-50 bg-white' variant='contained' onClick={nextSlide}
                    sx={{
                        position: 'absolute', right: "0rem", top: "8rem",
                        transform: "translateX(50%) rotate(90deg)", bgcolor: "white",
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />

                </Button>}
                {activeIndex !== 0 && <Button className='z-50 bg-white' variant='contained' onClick={prevSlide}
                    sx={{
                        position: 'absolute', left: "0rem", top: "8rem",
                        transform: "translateX(50%) rotate(-90deg)", bgcolor: "white",
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                }

            </div>
        </div>
        </div>
    )
}

export default HomeSectionCarousel      