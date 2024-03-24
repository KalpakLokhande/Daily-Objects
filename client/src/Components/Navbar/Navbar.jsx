import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import bag from '../../assets/Bag.png'
import search from '../../assets/Search.png'
import profile from '../../assets/Profile.png'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="center">
        <ul>
            <li>Tech</li>
            <li>Bags & Wallets</li>
            <li>Work Essentials</li>
            <li>Gifting</li>
            <li>Collection</li>
            <li>Shop By Apple</li>
            <li>New Arrivals</li>
        </ul>
      </div>
      <div className="right">
        <ul>
            <li><img src={bag} alt="" /></li>
            <li><img src={profile} alt="" /></li>
            <li><img src={search} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
