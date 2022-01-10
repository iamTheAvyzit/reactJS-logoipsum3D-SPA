import React from 'react'
import { G1, G2, G3, G4, G5, Hero1 } from '../imports'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='hero'>
                <div className='group'>
                    <p className='group-head'>Grow your subscription business</p>
                    <p className='group-desc'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                    <button>Get Started</button>
                </div>
                <img src={Hero1}/>
            </div>
            <div className='clients'>
                <img src={G1}/>
                <img src={G2}/>
                <img src={G3}/>
                <img src={G4}/>
                <img src={G5}/>
            </div>
        </div>
    )
}

export default HeroSection
