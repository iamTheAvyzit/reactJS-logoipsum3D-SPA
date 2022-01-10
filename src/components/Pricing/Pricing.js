import React from 'react'
import './Pricing.css'

export const Pricing = ({type, price, website, hosting, support}) => {
    return (
        <div className='container'>
            <p>{type}</p>
            <h4>{price}<p>/month</p></h4>
            <p>{website} Website</p>
            <p>{hosting} GB Hosting</p>
            <p>{support} Support</p>
            <button>Get Started</button>
        </div>
    )
}
