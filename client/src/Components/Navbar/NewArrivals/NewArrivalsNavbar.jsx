import React from 'react'
import './newArrivals.css'
import drawString from '../../../assets/NewArrivals/drawstrinsg.webp'
import systemTote from '../../../assets/NewArrivals/system-tote.webp'
import organizers from '../../../assets/NewArrivals/Organisers_under_new_arrivals.webp'
import pangea from '../../../assets/NewArrivals/pangea-s.webp'
import chargingSolutions from '../../../assets/NewArrivals/neww-charging-solution.webp'

const NewArrivalsNavbar = () => {
  return (
    <div className='newArrivalsNavBar' >
      <h1>New Arrivals</h1>
      <ul>
        <li>
            <img src={drawString} alt="" />
            <p>Draw Strings</p>
        </li>
        <li>
            <img src={systemTote} alt="" />
            <p>System Tote</p>
        </li>
        <li>
            <img src={organizers} alt="" />
            <p>Organizers</p>
        </li>
        <li>
            <img src={pangea} alt="" />
            <p>Pangea</p>
        </li>
        <li>
            <img src={chargingSolutions} alt="" />
            <p>Charging Solutions</p>
        </li>
      </ul>
    </div>
  )
}

export default NewArrivalsNavbar
