import React from 'react'
import './ShopByApple.css'
import iphone from '../../../assets/ShopByApple/neww-iphone.webp'
import macbook from '../../../assets/ShopByApple/neww-mackbook.webp'
import watch from '../../../assets/ShopByApple/neww-apple-watch.webp'
import ipad from '../../../assets/ShopByApple/ipad-s.webp'
import airpods from '../../../assets/ShopByApple/airpods-cases.webp'
import airtags from '../../../assets/ShopByApple/airtags-cases.webp'

const ShopByApple = () => {
    return (
        <div className='shopByApple' >
            <h1>Shop By Apple</h1>
            <ul>
                <li>
                    <img src={iphone} alt="" />
                    <p>iPhone</p>
                </li>
                <li>
                    <img src={macbook} alt="" />
                    <p>Macbook</p>
                </li>
                <li>
                    <img src={watch} alt="" />
                    <p>Apple Watch</p>
                </li>
                <li>
                    <img src={ipad} alt="" />
                    <p>IPad</p>
                </li>
                <li>
                    <img src={airpods} alt="" />
                    <p>Airpods</p>
                </li>
                <li>
                    <img src={airtags} alt="" />
                    <p>Airtags</p>
                </li>

            </ul>
        </div>
    )
}

export default ShopByApple
