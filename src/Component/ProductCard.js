import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom"
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
import laptop from "../images/laptop.jpg"
import tv from "../images/tv.jpg"

export const ProductCard = (props) => {
    let location = useLocation()
    let { grid } = props
    return (
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : `col-2`}`}>

            <Link to={":id"} className='product-card position-relative m-1'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'><img src={wish} /></button>
                </div>
                <div className='product-image'>
                    <img src={laptop} />
                    <img src={tv} />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>hello this is the best product ever</h5>
                    <ReactStars count={5} value={4} edit={false} size={24} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? `d-block` : `d-none`}`}>
                        description description descriptiondescription description descriptiondescription
                        description descriptiondescription description descriptiondescription description
                        descriptiondescription description description
                    </p>
                    <p className='price'>$100.00</p>

                </div>

                <div className='action-bar position-absolute '>
                    <div className='d-flex flex-column gap-10 '>
                        <Link to={""}><img src={prodcompare} /></Link>
                        <Link to={""}><img src={view} /></Link>
                        <Link to={""}><img src={addcart} /></Link>
                    </div>
                </div>
            </Link>
        </div>

    )
}