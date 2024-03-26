import React from 'react'
import './Products.css'
import Navbar from '../../Components/Navbar/Navbar'
import All from '../../assets/PhoneCase Categories/all.webp'
import Magsafe from '../../assets/PhoneCase Categories/magsafe-phonecase-icon.webp'
import Basics from '../../assets/PhoneCase Categories/basics-cases.webp'
import Stride from '../../assets/PhoneCase Categories/updated-filter-icons.webp'
import HybridClear from '../../assets/PhoneCase Categories/updated-filter-icons2.webp'
import PhoneBags from '../../assets/PhoneCase Categories/cobble-sling.webp'
import PhoneLanyards from '../../assets/PhoneCase Categories/phone-lanyard-listing-page-filter-icon-1.webp'

const Products = () => {

  const data = {
    heading: "Apple iPhone 15 Covers & Cases",
    products: [
      {
        name: "Something"
      }
    ]
  }

  return (
    <div className='products' >
      <Navbar></Navbar>
      <div className="categories">
        <h1> {data.heading} </h1>
        <ul>
        <li>
            <img src={All} alt="" />
            <p>All</p>
          </li>
          <li>
            <img src={Magsafe} alt="" />
            <p>Magsafe</p>
          </li>
          <li>
            <img src={Basics} alt="" />
            <p>Basics</p>
          </li>
          <li>
            <img src={HybridClear} alt="" />
            <p>Hybrid Clear</p>
          </li>
          <li>
            <img src={Stride} alt="" />
            <p>Stride 2.0</p>
          </li>
          <li>
            <img src={PhoneBags} alt="" />
            <p>Phone Bags</p>
          </li>
          <li>
            <img src={PhoneLanyards} alt="" />
            <p>Phone Lanyards</p>
          </li>
        </ul>
      </div>
      <div className="procutsList">
        
      </div>
    </div>
  )
}

export default Products
