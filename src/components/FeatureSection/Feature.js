import React from 'react'
import './FeatureSection.css'

export const Feature = ({title, text, image}) => {
    return (
        <div className='feature-mini-group'>
            <img src={image}/>
            <p className='feature-mini-head'>{title}</p>
            <p className='feature-mini-text'>{text}</p>
        </div>
    )
}