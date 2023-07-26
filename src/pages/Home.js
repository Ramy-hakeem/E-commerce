import React from 'react'
import PageTitle from '../Component/PageTitle'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import { BlogeCards } from '../Component/BlogeCards'
import { ProductCard } from '../Component/ProductCard'
import SpecialProduct from '../Component/SpecialProduct'
import Container from '../Component/Container'
import { services } from '../utils/Data'
function Home() {
    return (
        <>
            <PageTitle title="Home" />

            <Container class1="home-wrapper-1 py-5">
                <div className='w-100 row ps-4'>
                    <div className='col-6'>
                        <div className='main-banner position-relative '>
                            <img src='images/main-banner-1.jpg'
                                className='img-fluid rounded-3'>
                            </img>
                            <div className='main-banner-content position-absolute'>
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p>from $999.00 or $41.62/mo.</p>
                                <Link className='button'>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex flex-wrap gap-10 justify-between align-items-center'>
                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-01.jpg'
                                    className='img-fluid rounded-3' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>BEST SALE</h4>
                                    <h5>Laptops Max.</h5>
                                    <p>from $1699.00</p>
                                    <p> or $64.62/mo.</p>
                                </div>
                            </div>

                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-03.jpg'
                                    className='img-fluid rounded-3'>
                                </img>
                                <div className='small-banner-content position-absolute'>
                                    <h4>NEW ARRIVAL</h4>
                                    <h5> Buy iPad Air.</h5>
                                    <p>from $599.00</p>
                                    <p> or $49.91/mo. for 12 mo.</p>
                                </div>
                            </div>

                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-02.jpg'
                                    className='img-fluid rounded-3'>
                                </img>
                                <div className='small-banner-content position-absolute'>
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch 7.</h5>
                                    <p>shop the latest band.</p>
                                    <p>styles and colors.</p>
                                </div>
                            </div>



                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-04.jpg'
                                    className='img-fluid rounded-3'>
                                </img>
                                <div className='small-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h5>AirPods Max.</h5>
                                    <p>from $999.00 or $41.62/mo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapped-2 py-5">
                <div className='row ps-4'>
                    <div className='col-12'>
                        <div className='servies d-flex align-items-center justify-content-around'>
                            {services.map((i, j) => {
                                return (
                                    <div className="d-flex align-items-center gap-15" key={j}>
                                        <img src={i.image} />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className='mb-0'>{i.tagline}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </Container>

            <Container class1="home-wrapped-2">
                <div className='row '>
                    <div className='col-12 w-100  '>
                        <div className='categeories d-flex align-items-center justify-content-between flex-wrap'>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/camera.jpg' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/tv.jpg' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/smartwatch.png' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Music & Gaming </h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/joystick.png' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Mobiles & Tablets</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/tab1.jpg' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Portable Speakers</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/speaker.jpg' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Headphones</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/headphone.jpg' alt='' />
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <div>
                                    <h6>Home Appliances </h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/homeapp.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="feature-wrapper py-5 home-wrapper-2">
                <div className='row '>
                    <div className='col-12'>
                        <h3 className='section-heading '>Feature Collection </h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            <Container class1=" famous-wrapper py-5 home-wrapper-2">
                <div className='row d-flex'>
                    <div className='col-3 '>
                        <div className='m-1 container-famous-card overflow-hidden bg-dark'>
                            <div className='famous-card '>
                                <div className='famous-content ps-2 py-3 '>
                                    <h5 className='text-white'>Big Screen</h5>
                                    <h6 className='text-white'>Smart JoyStick series 7</h6>
                                    <p className='text-white'>From $399 or $16/mo. for 24 mo.*</p>
                                </div>
                                <img src='images/joystick.png' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='m-1 container-famous-card overflow-hidden '>
                            <div className='famous-card '>
                                <div className='famous-content ps-2 py-3 '>
                                    <h5>Big Screen</h5>
                                    <h6>Smart JoyStick series 7</h6>
                                    <p>From $399 or $16/mo. for 24 mo.*</p>
                                </div>
                                <img src='images/joystick.png' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='m-1 container-famous-card overflow-hidden '>
                            <div className='famous-card '>
                                <div className='famous-content ps-2 py-3 '>
                                    <h5>Big Screen</h5>
                                    <h6>Smart JoyStick series 7</h6>
                                    <p>From $399 or $16/mo. for 24 mo.*</p>
                                </div>
                                <img src='images/joystick.png' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='m-1 container-famous-card overflow-hidden '>
                            <div className='famous-card '>
                                <div className='famous-content ps-2 py-3 '>
                                    <h5>Big Screen</h5>
                                    <h6>Smart JoyStick series 7</h6>
                                    <p>From $399 or $16/mo. for 24 mo.*</p>
                                </div>
                                <img src='images/joystick.png' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1=" special-wrapper py-5 home-wrapper-2">
                <div className='row  '>
                    <div className='col-12'>
                        <h3 className='section-heading'>Special Products </h3>
                    </div>
                </div>
                <div className='row '>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className='row '>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Popular Products </h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1="marquee-wrapper py-5">
                <div className='row '>
                    <div className='col-12 '>
                        <div className='marquee-inner-wraper card-wrapper '>
                            <Marquee>
                                <img src='images/brand-01.png' className='ps-5' />
                                <img src='images/brand-02.png' className='ps-5' />
                                <img src='images/brand-03.png' className='ps-5' />
                                <img src='images/brand-04.png' className='ps-5' />
                                <img src='images/brand-05.png' className='ps-5' />
                                <img src='images/brand-06.png' className='ps-5' />
                                <img src='images/brand-07.png' className='ps-5' />
                                <img src='images/brand-08.png' className='ps-5' />
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Latest Blogs</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <BlogeCards />
                    </div>
                    <div className='col-3'>
                        <BlogeCards />
                    </div>
                    <div className='col-3'>
                        <BlogeCards />
                    </div>
                    <div className='col-3'>
                        <BlogeCards />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home