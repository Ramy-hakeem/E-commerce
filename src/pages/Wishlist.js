import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import Container from '../Component/Container'
function Wishlist() {
    return (
        <>
            <Path title="Wishlist" />
            <PageTitle title="Wishlist" />

            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card  position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image '>
                                <img src='images/watch.jpg' className='img-fluid w-100' />
                            </div>
                            <div className='py-3 px-3 bg-white'>
                                <h5 className='title'>Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card  position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image '>
                                <img src='images/watch.jpg' className='img-fluid w-100' />
                            </div>
                            <div className='py-3 px-3 bg-white'>
                                <h5 className='title'>Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card  position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image '>
                                <img src='images/watch.jpg' className='img-fluid w-100' />
                            </div>
                            <div className='py-3 px-3 bg-white'>
                                <h5 className='title'>Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card  position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image '>
                                <img src='images/watch.jpg' className='img-fluid w-100' />
                            </div>
                            <div className='py-3 px-3 bg-white'>
                                <h5 className='title'>Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Wishlist