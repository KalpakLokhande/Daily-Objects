import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import NewArrivals from '../../Components/New Arrivals/NewArrivals'
import NewArrivalsBig from '../../Components/New Arrivals/NewArrivalsBig'
import drawStrings from '../../assets/aDrawstring-homepage-Banners-desktop.webp'
import ThreeCardsDisplay from '../../Components/Three Cards Display/ThreeCardsDisplay'
import OurStory from '../../Components/Our Story/OurStory'

const Home = () => {
    return (
        <div className='home' >
            <Navbar></Navbar>
            <Slider></Slider>
            <NewArrivals></NewArrivals>
            <NewArrivalsBig></NewArrivalsBig>
            <img style={{width:'100%'}} src={drawStrings} ></img>
            <NewArrivals></NewArrivals>
            <ThreeCardsDisplay data1={'featuredCollections'} ></ThreeCardsDisplay>
            <ThreeCardsDisplay data1={'Collections'} ></ThreeCardsDisplay>
            <OurStory></OurStory>
        </div>
    )
}

export default Home
