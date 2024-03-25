import React from 'react'
import './BagsAndWallets.css'
import toteBags from '../../../assets/Navbar Bags&Wallets/neww-tote-bags.webp'
import crossBodyBags from '../../../assets/Navbar Bags&Wallets/crossbody-s.webp'
import Bagpacks from '../../../assets/Navbar Bags&Wallets/neww-backpacks.webp'
import Messenger from '../../../assets/Navbar Bags&Wallets/neww-messenger-bags.webp'
import Wallets from '../../../assets/Navbar Bags&Wallets/wallets-s.webp'
import DuffleBags from '../../../assets/Navbar Bags&Wallets/duffle-bags-s.webp'
import Pouches from '../../../assets/Navbar Bags&Wallets/neww-dopp-kit.webp'

const BagsAndWallets = () => {
  return (
    <div className='bagsWallets' >
      <h1>Bags And Wallets</h1>
      <ul>
        <li>
            <img src={toteBags} alt="" />
            <p>Tote Bags</p>
        </li>
        <li>
            <img src={crossBodyBags} alt="" />
            <p>Cross Body Bags</p>
        </li>
        <li>
            <img src={Bagpacks} alt="" />
            <p>Bagpacks</p>
        </li>
        <li>
            <img src={Messenger} alt="" />
            <p>Messenger</p>
        </li>
        <li>
            <img src={Wallets} alt="" />
            <p>Wallets</p>
        </li>
        <li>
            <img src={DuffleBags} alt="" />
            <p>Duffle Bags</p>
        </li>
        <li>
            <img src={Pouches} alt="" />
            <p>Pouches</p>
        </li>
      </ul>
    </div>
  )
}

export default BagsAndWallets
