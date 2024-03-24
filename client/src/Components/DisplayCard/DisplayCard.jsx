import React from 'react'
import './DisplayCard.css'

const DisplayCard = ({data}) => {

    return (
        <div className='displayCard'>
            <img src={data.image} alt="" />
            <p style={{ fontSize: '12px', fontWeight: '200', color: '#888',  }} >{data.details}</p>
            <p style={{ fontSize: '14px', fontWeight: '400' }} >{data.name}</p>
        </div>
    )
}

export default DisplayCard
