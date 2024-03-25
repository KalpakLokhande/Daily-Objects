import React from 'react'
import './TechDropDown.css'
import phoneCase from '../../../assets/Navbar Tech/phones-casess-update.webp'
import laptopSleeves from '../../../assets/Navbar Tech/laptops-sleeves-and-bags-updates.webp'
import chargingSolutions from '../../../assets/Navbar Tech/neww-charging-solution.webp'
import watchAccesories from '../../../assets/Navbar Tech/watchs-accessories-updates.webp'
import stands from '../../../assets/Navbar Tech/neww-stands.webp'
import organizers from '../../../assets/Navbar Tech/organsierss-update.webp'
import otherAccesories from '../../../assets/Navbar Tech/other-accessories--update.webp'

const TechDropdown = () => {
    return (
        <div className='techDropDown' >
            <h1>Tech</h1>
            <ul>
                <li>
                    <img src={phoneCase} alt="" />
                    <p>Phone Cases</p>
                </li>
                <li>
                    <img src={laptopSleeves} alt="" />
                    <p>Laptop Sleeves</p>
                </li>
                <li>
                    <img src={chargingSolutions} alt="" />
                    <p>Charging Solutions</p>
                </li>
                <li>
                    <img src={watchAccesories} alt="" />
                    <p>Watch Accesories</p>
                </li>
                <li>
                    <img src={stands} alt="" />
                    <p>Stands</p>
                </li>
                <li>
                    <img src={organizers} alt="" />
                    <p>Organizers</p>
                </li>
                <li>
                    <img src={otherAccesories} alt="" />
                    <p>Other Accesories</p>
                </li>

            </ul>
        </div>
    )
}

export default TechDropdown
