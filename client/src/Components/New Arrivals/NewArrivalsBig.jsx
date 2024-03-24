import React from 'react'
import './NewArrivalsBig.css'
import messengers from '../../assets/messengers-homepage-copy.webp'
import organizers from '../../assets/organisers-desktop.webp'

const NewArrivalsBig = () => {
    return (
        <div className='newArrivalsBig' >
            <div className="left">
                <div className="container">
                    <img src={organizers} alt="" />
                    <p style={{ fontSize: '18px', fontWeight: '600', color: '#090909', marginTop: '15px' }} >Organizers</p>
                    <p style={{ fontSize: '12px', fontWeight: '500', color: '#090909' }} >Shop Now</p>
                </div>
            </div>
            <div className="right">
                <div className="container">

                    <img src={messengers} alt="" />
                    <p style={{ fontSize: '18px', fontWeight: '600', color: '#090909', marginTop: '15px' }} >Messenger</p>
                    <p style={{ fontSize: '12px', fontWeight: '500', color: '#090909' }} >Shop Now</p>
                </div>
            </div>

        </div>
    )
}

export default NewArrivalsBig
