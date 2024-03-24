import React from 'react'
import './NewArrivals.css'
import DisplayCard from '../DisplayCard/DisplayCard'
import MagSafeCharger from '../../assets/turner-phone-stands.webp'
import LaptopSleeve from '../../assets/stria-laptop-sleeve.webp'
import BlackVault from '../../assets/black-vault-tech-organiser.webp'
import TurnerPhoneStand from '../../assets/turner-phone-stand.webp'
import PedalDaypack from '../../assets/pedal-daypack.webp'

const data = [
    {
        name: "Foldaway 3-in-1 MagSafe Wireless Charger",
        details: "Available in Black Color",
        image: MagSafeCharger
    },
    {
        name: "Laptop Sleeve",
        details: "Available in 4 Colors",
        image: LaptopSleeve
    },
    {
        name: "Vault Tech Organizer",
        details: "Available in 2 Colors",
        image: BlackVault
    },
    {
        name: "Turner Phone Stand",
        details: "Available in Black Color",
        image: TurnerPhoneStand
    },
    {
        name: "Turner Phone Stand",
        details: "Available in Black Color",
        image: TurnerPhoneStand
    },
    {
        name: "Turner Phone Stand",
        details: "Available in Black Color",
        image: TurnerPhoneStand
    },
    
]

const NewArrivals = () => {

    return (
        <div className="newArrivals">
            <div className="left">
                <p style={{ fontSize: '32px', fontWeight: '500', letterSpacing: '2px' }} > NEW <br /> ARRIVALS</p>
                <p style={{ fontSize: '14px', fontWeight: '400', letterSpacing: '1px' }} >Check out our latest launches.</p>
                <button style={{ width: '200px', cursor: 'pointer', marginTop: '20px', padding: '10px', border: 'none', color: 'aliceBlue', background: '#090909' }} >Shop New Arrivals</button>
            </div>
            <div className="right">
                <div className="container">
                    {data.map(data => {
                        return (
                            <DisplayCard data={data} ></DisplayCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
