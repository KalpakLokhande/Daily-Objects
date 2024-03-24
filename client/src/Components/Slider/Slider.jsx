import React, { useState, useEffect } from 'react'
import './Slider.css'
import backpacks from '../../assets/backpacks-desktop.webp'
import lanyardandcord from '../../assets/lanyard-and-cord.webp'
import phonesling from '../../assets/phone-sling-desktop-banner.webp'
import theamtinder from '../../assets/theam-tinder-desktop.webp'
import watchband from '../../assets/watchband-nwe-web.webp'

const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
        
    }, [currentSlide])


    const data = [
        backpacks,
        lanyardandcord,
        phonesling,
        theamtinder,
        watchband
    ]

  return (
    <div className='slider'>
      <div className="container"  style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} ></img>
        <img src={data[1]} ></img>
        <img src={data[2]} ></img>
        <img src={data[3]} ></img>
        <img src={data[4]} ></img>
      </div>
    </div>
  )
}

export default Slider
