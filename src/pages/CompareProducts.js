import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import Color from "../Component/Color"
import Container from '../Component/Container'
function CompareProducts() {
    return (
        <>
            <Path title="Compare Products" />
            <PageTitle title="Compare Product " />

            <Container class1="compare-product-wrapper py-5 home-wrapper">
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' />
                            </div>
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Abailabilty:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Size</h5>
                                    <div>
                                        <span className='m-2'>S</span>
                                        <span>M</span>

                                    </div>
                                </div>
                                <div className='product-detail'>
                                    <h5>Brand</h5>
                                    <p>Havels</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' />
                            </div>
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Honor T1 7.0 1 GB ROM 7 Ich With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Abailabilty:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <div><Color /></div>
                                </div>
                                <div className='product-detail'>
                                    <h5>Size</h5>
                                    <div>
                                        <span className='m-2'>S</span>
                                        <span>M</span>

                                    </div>
                                </div>
                                <div className='product-detail'>
                                    <h5>Brand</h5>
                                    <p>Havels</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </>

    )
}

export default CompareProducts