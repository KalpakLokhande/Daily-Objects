import React from 'react'
import './BigDisplayCard.css'

const BigDisplayCard = ({data}) => {

    return (
        <div className='bigDisplayCard'>
            <img src={data.image} alt="" />
            <p style={{ fontSize: '22px', fontWeight: '600', margin:'10px 0px' }} >{data.name}</p>
            <p style={{ fontSize: '14px', fontWeight: '400', paddingRight:'50px' }} >{data.details}</p>
        </div>

    )
}

export default BigDisplayCard
