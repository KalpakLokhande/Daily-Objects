import React from 'react'
import './ProductsDisplayCard.css'

const ProductsDisplayCard = ({ data }) => {
    return (
        <div className='productsDisplayCard' >
            <img src={data.image} alt="" />
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>{data.offer}</p>
        </div>
    )
}

export default ProductsDisplayCard
