import React from 'react'
import { Feature } from './Feature'
import './FeatureSection.css'
import { Calc, Cam, Card, Hero2, Hero3 } from '../imports';

const featuresData = [
    {
      title: 'Benchmarks',
      text: 'See how you stack up against comparable companies in similar stages.',
      img: Card
    },
    {
      title: 'Pricing Audit',
      text: 'Benchmark the health of your monetization and pricing strategy.',
      img: Calc
    },
    {
      title: 'Retention Audit',
      text: 'Audit where revenue leakage exists and where you can increase retention.',
      img: Cam
    }
];

const FeatureSection = () => {
    return (
        <div className='feature-section' id='features'>
            <div className='feature-main-section'>
                <div className='feature1'>
                    <img src={Hero2}/>
                    <div className='feature1-group'>
                        <p className='head'>Subscription index</p>
                        <p className='desc'>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className='feature1'>
                    <div className='feature1-group'>
                        <p className='head'>In-depth metrics</p>
                        <p className='desc'>Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
                        <button>Learn more</button>
                    </div>
                    <img src={Hero3}/>
                </div>
            </div>
            <div className='feature-mini-section'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} image={item.img} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default FeatureSection