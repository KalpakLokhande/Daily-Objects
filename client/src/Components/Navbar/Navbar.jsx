import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import bag from '../../assets/Bag.png'
import search from '../../assets/Search.png'
import profile from '../../assets/Profile.png'
import TechDropdown from './TechDropDown/TechDropdown'
import BagsAndWallets from './BagsAndWallets/BagsAndWallets'

const Navbar = () => {

  const [dropDownState, setDropDownState] = useState({
    techDisplay: false,
    bagsAndWallets: false,
    workEssentials: false,
    collections: false,
    shopByApple: false,
    newArrivals : false
  })

  return (
    <>
      <div className='navbar' >
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="center">
          <ul>
            <li
              onMouseEnter={() => { setDropDownState({ techDisplay: true }) }}>
              Tech
            </li>
            <li
              onMouseEnter={() => { setDropDownState({ bagsAndWallets: true }) }}>
              Bags & Wallets
            </li>
            <li
              onMouseEnter={() => { setDropDownState({ workEssentials: true }) }}>
              Work Essentials
            </li>
            <li
              onMouseEnter={() => { setDropDownState({ collections: true }) }}>
              Collections
            </li>
            <li
              onMouseEnter={() => { setDropDownState({ shopByApple: true }) }}>
              Shop By Apple</li>
            <li
              onMouseEnter={() => { setDropDownState({ newArrivals: true }) }}>
              New Arrivals
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li><img src={bag} alt="" /></li>
            <li><img src={profile} alt="" /></li>
            <li><img src={search} alt="" /></li>
          </ul>
        </div>
      </div >

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.techDisplay ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px' }}
        onMouseEnter={() => setDropDownState({ techDisplay: true })}
        onMouseLeave={() => setDropDownState({ techDisplay: false })}>
          <TechDropdown></TechDropdown>
      </div>

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.bagsAndWallets ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px' }}
        onMouseEnter={() => setDropDownState({ bagsAndWallets: true })}
        onMouseLeave={() => setDropDownState({ bagsAndWallets: false })}>
              <BagsAndWallets></BagsAndWallets>
      </div>

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.workEssentials ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px', background: '#111' }}
        onMouseEnter={() => setDropDownState({ workEssentials: true })}
        onMouseLeave={() => setDropDownState({ workEssentials: false })}>
        <h1 style={{ color: 'aliceBlue' }} > Work Essentials </h1>
      </div>

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.collections ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px', background: '#111' }}
        onMouseEnter={() => setDropDownState({ collections: true })}
        onMouseLeave={() => setDropDownState({ collections: false })}>
        <h1 style={{ color: 'aliceBlue' }} > Collections </h1>
      </div>

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.shopByApple ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px', background: '#111' }}
        onMouseEnter={() => setDropDownState({ shopByApple: true })}
        onMouseLeave={() => setDropDownState({ shopByApple: false })}>
        <h1 style={{ color: 'aliceBlue' }} > Shop By Apple </h1>
      </div>

      <div
        className="tech-dropdown-container"
        style={{ display: dropDownState.newArrivals ? 'block' : 'none', position: 'absolute', top: '85px', left: '0', zIndex: '1', width: '100%', height: '300px', background: '#111' }}
        onMouseEnter={() => setDropDownState({ newArrivals: true })}
        onMouseLeave={() => setDropDownState({ newArrivals: false })}>
        <h1 style={{ color: 'aliceBlue' }} > New Arrivals </h1>
      </div>

    </>


  )
}

export default Navbar
