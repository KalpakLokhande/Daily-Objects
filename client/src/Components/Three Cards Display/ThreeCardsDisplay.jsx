import React, { useState } from 'react'
import './ThreeCardsDisplay.css'
import ShoSha from '../../assets/sho-sho-banner-update.webp'
import MechaCollection from '../../assets/mecha-chronicles-update.webp'
import PawsAndClaws from '../../assets/paws_and_claws_revised-01.webp'
import BigDisplayCard from '../DisplayCard/BigDisplayCard'
import EightOneCollection from '../../assets/collection-08-01-update-2.webp'
import TarpCollection from '../../assets/collection-tarp-update-2.webp'
import PlatformCollection from '../../assets/collections-Platform-collection-banner-image-homepgae.webp'

import { useEffect } from 'react'



const ThreeCardsDisplay = ({ data1 }) => {

    let [data, setData] = useState([])

    useEffect(() => {

        if (data1 && data1 === 'featuredCollections') {

            data = [
                {
                    name: "Sho Sha",
                    details: "A maximal phone case collection that's fresh, unique and unexpectedly relatable.",
                    image: ShoSha
                },
                {
                    name: "Mecha Chronicles",
                    details: "A collection showcasing adorable animals piloting giant machines within an altered reality.",
                    image: MechaCollection
                },
                {
                    name: "Paws And Claws",
                    details: "Quirky pet puns via bold shapes and symmetry, on the back of your phone!",
                    image: PawsAndClaws
                }
            ]

            setData(data)

        } else if (data1 && data1 === 'Collections') {

            data = [
                {
                    name: "08:01 Collection",
                    details:"A collection featured to preserve all brief encounters on your everyday journey.",
                    image : EightOneCollection
                },
                {
                    name: "Tarp Collection",
                    details:"Urban-inspired carriers, made for free-spirited and powerful wearers.",
                    image : TarpCollection
                },
                {
                    name: "Platform Collection",
                    details:"Designed with minimal geometric innovations to add comfort to your workspace.",
                    image : PlatformCollection
                },

            ]

            setData(data)
        }

    }, [])

    return (
        <div className='ThreeCardsDisplay' >
            <h1 style={{ paddingLeft: '60px', marginBottom: '20px' }} > {data1 === "featuredCollections" ? "FEATURED COLLECTIONS" : 'COLLECTIONS'} </h1>
            <div className="container">
                {data.map(data => {
                    return <BigDisplayCard key={data.name} data={data}></BigDisplayCard>
                })}
            </div>
        </div>
    )
}

export default ThreeCardsDisplay
