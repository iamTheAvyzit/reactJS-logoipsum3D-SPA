import React from 'react'
import { Girl } from '../imports'
import './Blog.css'

export const Blog = () => {
    return (
        <>
            <div className='blog' id='blog'>
                <div className='blog-group'>
                    <p className='head'>How logoipsum works?</p>
                    <p className='desc'>We work together to design, create and produce work that we are proud of for folks that we believe in. We are available for hire in a wide range of creative disciplines for a variety of jobs, projects and gigs.</p>
                    <button>Read our blogs</button>
                </div>
                <img src={Girl}/>
            </div>
            <div className='footer'>Copyright &copy; 2022 Logoipsum Ind.</div>
        </>
    )
}
