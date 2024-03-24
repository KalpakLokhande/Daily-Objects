import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import NewArrivals from '../../Components/New Arrivals/NewArrivals'
import NewArrivalsBig from '../../Components/New Arrivals/NewArrivalsBig'

const Home = () => {
    return (
        <div className='home' >
            <Navbar></Navbar>
            <Slider></Slider>
            <NewArrivals></NewArrivals>
            <NewArrivalsBig></NewArrivalsBig>
        </div>
    )
}

export default Home
