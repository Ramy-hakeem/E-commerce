import React from 'react'
import { Link } from "react-router-dom"
import blog1 from "../images/blog-1.jpg"
export const BlogeCards = () => {
    return (
        <>

            <div className='blog-card'>
                <div className='card-image'>
                    <img src={blog1} className='img-fluid w-100' alt='blog' />
                </div>
                <div className='blog-content'>
                    <p className='data'>1 Dec, 2022</p>
                    <h5 className='title'> A Beautiful Sunday Morning Renaissance</h5>
                    <p className='desc'>shitttttttttttttttttttttttttttt</p>
                    <Link className='button' to="/blog/:id">Read More </Link>
                </div>
            </div>

        </>
    )
}
