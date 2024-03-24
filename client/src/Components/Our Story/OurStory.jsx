import React from 'react'
import './OurStory.css'
import ourstory from '../../assets/Our-Story-updated01.webp'

const OurStory = () => {
    return (
        <div className='ourStory' >
            <div className="left">
                <div className="container">
                    <h1 style={{fontSize:'42px', marginBottom: '30px' }} >Our Story</h1>
                    <p style={{ fontSize: '18px', lineHeight:'24px'}} >
                        Founded in 2012, DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry #lessordinary.
                        <br /><br />
                        You can look forward to a carefully-crafted range of products, made from long-lasting materials, with designs that stand out and make your life easy. With DailyObjects, let your lifestyle reflect your sensibilities as you go on to make your every day #lessordinary.
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={ourstory} alt="" />
            </div>
        </div>
    )
}

export default OurStory
