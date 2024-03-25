import React from 'react'
import './WorkEssentials.css'
import chargingSolutions from '../../../assets/Work Essentials/neww-charging-solution.webp'
import Stands from '../../../assets/Work Essentials/neww-stands.webp'
import Desks from '../../../assets/Work Essentials/neww-desks.webp'
import organizers from '../../../assets/Work Essentials/organsierss-update.webp'
import stationary from '../../../assets/Work Essentials/stationery-s.webp'
import drinkWare from '../../../assets/Work Essentials/drinkware-s.webp'


const WorkEssentials = () => {
  return (
    <div className='workEssentials' >
    <h1>Work Essentials</h1>
    <ul>
        <li>
            <img src={chargingSolutions} alt="" />
            <p>Charging Solutions</p>
        </li>
        <li>
            <img src={Stands} alt="" />
            <p>Stands</p>
        </li>
        <li>
            <img src={Desks} alt="" />
            <p>Desks</p>
        </li>
        <li>
            <img src={organizers} alt="" />
            <p>Organizers</p>
        </li>
        <li>
            <img src={stationary} alt="" />
            <p>Stationary</p>
        </li>
        <li>
            <img src={drinkWare} alt="" />
            <p>Drinkware</p>
        </li>
    
    </ul>
</div>
  )
}

export default WorkEssentials
