import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import NewArrivals from '../../Components/New Arrivals/NewArrivals'
import NewArrivalsBig from '../../Components/New Arrivals/NewArrivalsBig'
import drawStrings from '../../assets/aDrawstring-homepage-Banners-desktop.webp'
import ThreeCardsDisplay from '../../Components/Three Cards Display/ThreeCardsDisplay'
import OurStory from '../../Components/Our Story/OurStory'
import CorporateGift from '../../assets/corporate-gifting-desktops.webp'
import DOPlayground from '../../assets/playground-img.webp'
import features from '../../assets/features-desktops.webp'
import reviews from '../../assets/reviews.webp'

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
            <img style={{width:'100%'}} src={CorporateGift} alt="" />
            <OurStory></OurStory>
            <img style={{width:'100%'}}  src={DOPlayground} alt="" />
            <p style={{width:'100%', textAlign:'center', fontSize:'32px', margin:'5% 0'}} > Featured In </p>
            <img style={{width:'100%', marginBottom:'5%'}} src={features} ></img>
            <p style={{width:'100%', textAlign:'center', fontSize:'32px', margin:'5% 0'}} >  Honest Reviews, Nothing Else. </p>
            <img style={{width:'100%', marginBottom:'5%'}} src={reviews} ></img>

        </div>
    )
}

export default Home
