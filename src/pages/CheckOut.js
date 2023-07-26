import React from 'react'
import Path from '../Component/Path'
import PageTitle from '../Component/PageTitle'
import { Link } from 'react-router-dom'
import { MdArrowBackIos } from "react-icons/md"
import watch from "../images/watch.jpg"
import Container from '../Component/Container'


function CheckOut() {

    return (
        <>
            <PageTitle title={"Checkout"} />

            <Container class1="checkout-wrapper">
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Dev Conrner</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/cart"}>Cart</Link></li>
                                    <span> &nbsp;{`>`}</span>
                                    <li className="breadcrumb-item"><Link to={"/information"}>Information</Link></li>
                                    <span> &nbsp;{`>`}</span>
                                    <li className="breadcrumb-item"><Link to={"/shipping"}>Shipping</Link></li>
                                    <span> &nbsp;{`>`}</span>
                                    <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className='title total'>Contact Information</h4>
                            <p className='user-details'>
                                Navdeep Dahia (mount023@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form className='d-flex gap-15 flex-wrap justify-contnet-between py-3'>
                                <div className='w-100'>
                                    <select className='form-control form-select'>
                                        <option value={""} selected disabled>
                                            Select Country
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='First Name' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Last Name' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Address' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Apartment,suite,ect' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='city' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select className='form-control form-select'>
                                        <option value={""} selected disabled>Select state</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Zipcode' className='form-control' />
                                </div>
                            </form>
                            <div className='d-flex justify-content-between align-items-center mt-3 mb-5'>
                                <div >
                                    <MdArrowBackIos className='mb-1' />
                                    <Link to={"/cart"} className='text-dark'>Return to Cart</Link>
                                </div>
                                <div>
                                    <Link to={"/cart"} className='btn btn-danger'>Continue to Shipping</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-5  '>
                        <div className=' py-4  border-bottom '>
                            <div className='d-flex gap-10  mb-2 align-items-center justify-content-between '>
                                <div className='w-75 d-flex gap-10' >
                                    <div className='w-25 position-relative'>
                                        <span
                                            className='badge bg-secondary text-white rounded-circle p-1 position-absolute'
                                            style={{ right: "2px", top: "-10px" }}>
                                            1
                                        </span>

                                        <img
                                            src={watch}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>Title</h5>
                                        <p className='mb-0 total-price'>s/there is a holy shit here</p>
                                        <p className='total-price'>s/there is other holy shit here</p>
                                    </div>
                                </div>
                                <div >
                                    <h5 className='mb-0 total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='py-4 border-bottom '>
                            <div className='d-flex align-items-ceter justify-content-between mb-0'>
                                <p className='total' >Subtotal</p>
                                <p className='total-price'>$ 100</p>
                            </div>
                            <div className='d-flex align-items-ceter justify-content-between  '>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 100</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-ceter justify-content-between py-4'>
                            <h5 className='total'>Total</h5>
                            <p className='total-price'>$ 100</p>
                        </div>

                    </div>
                </div>
            </Container>

        </>

    )
}

export default CheckOut