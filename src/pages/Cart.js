import React from 'react'
import Path from '../Component/Path'
import PageTitle from '../Component/PageTitle'
import watch from "../images/watch.jpg"
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'
import Container from '../Component/Container'
function Cart() {
    return (
        <>
            <PageTitle title={"Cart"} />
            <Path title={"Cart"} />
            <Container class1="cart-wrapper home-wrapper-2 py-2">
                <div className='row'>
                    <div className='col-12 bg-white'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 d-flex align-items-center gap-15'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' />
                                </div>
                                <div className='w-75'>
                                    <p>hfg</p>
                                    <p>Size: hhh</p>
                                    <p>Color: hahah</p>
                                </div>
                            </div>
                            <div className='cart-col-2 '>
                                <h4 className='price'>$ 100</h4>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type='number' min={1} max={10} />
                                </div>
                                <div>{<AiFillDelete className='text-danger' />}</div>
                            </div>
                            <div className='cart-col-4'>
                                <h4 className='price'>$ 100</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 bg-white'>
                        <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 d-flex align-items-center gap-15'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' />
                                </div>
                                <div className='w-75'>
                                    <p>hfg</p>
                                    <p>Size: hhh</p>
                                    <p>Color: hahah</p>
                                </div>
                            </div>
                            <div className='cart-col-2 '>
                                <h4 className='price'>$ 100</h4>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type='number' min={1} max={10} />
                                </div>
                                <div>{<AiFillDelete className='text-danger' />}</div>
                            </div>
                            <div className='cart-col-4'>
                                <h4 className='price'>$ 100</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 py-2 mt-4 bg-white'>

                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to={"/product"} className='button'>Contenue to Shopping</Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>SubTotal:$ 1300</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to={"/checkout"} className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Cart