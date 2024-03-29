import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

function SpecialProduct() {
    return (
        <div className='col-6 '>
            <div className='special-product-card mb-3 ml-2'>
                <div className='d-flex justify-contnet-between'>
                    <div><img src='images/watch.jpg' className='img-fluid' /></div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Havels</h5>
                        <h6 className='title'>
                            samsung Galaxy Note10+ Mobile Phone; sim...
                        </h6>
                        <ReactStars count={5} value={4} edit={false} size={24} activeColor="#ffd700" />
                        <p className='price'><span className='red-p'>$100</span> &nbsp;<del>$200</del></p>
                        <div className='discount-till d-flex align-items-center gap-10 '>
                            <p className='mb-0'>
                                <b>5 </b>days
                            </p>
                            <div className='d-flex gap-10 align-items-center '>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                        </div>
                        <div className='prod-count mt-3'>
                            <p>products: 5</p>
                            <div className='progress'>
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100">

                                </div>
                            </div>

                        </div>
                        <Link className="button my-3">Add To Cart</Link>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default SpecialProduct