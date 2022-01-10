import React from 'react'
import { Pricing } from './Pricing'
import './Pricing.css'

const pricingData = [
    {
        type: 'Starter',
        price: 'Free',
        website: '1',
        hosting: '5',
        support: 'Limited'
    },
    {
        type: 'Premium',
        price: '$29',
        website: '10',
        hosting: '15',
        support: 'Premium'
    },
    {
        type: 'Premium',
        price: '$99',
        website: 'Unlimited',
        hosting: '50',
        support: 'Premium'
    }
]

export const PricingSection = () => {
    return (
        <>
            <div className='pricing-banner' id='pricing'>
                <p>Get the right plan for future products.</p>
                <button>Yearly</button>
                <button className='active'>Monthly</button>
            </div>
            <div className='pricing-section'>
            {pricingData.map((item, index) => (
                    <Pricing type={item.type} price={item.price} website={item.website} hosting={item.hosting} support={item.support} key={item.title + index} />
                ))} 
            </div>
        </>
    )
}