import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs"
import newsletter from "../images/newsletter.png"
import Container from './Container';
function Footer() {
    return (
        <>
            <Container class1="py-4 footer">
                <div className='w-100 row align-item-center '>
                    <div className='col-5 ps-5'>
                        <div className='footer-top-data d-flex gap-30 align-item-center'>
                            <img src={newsletter} className='' />
                            <h2 className='mb-0 text-white'>
                                Sing Up For Newsletter
                            </h2>
                        </div>
                    </div>
                    <div className='col-7 ps-5'>
                        <div className="input-group ">
                            <input type="text"
                                className="form-control py-1"
                                placeholder="your Email Adress..."
                                aria-label="your Email Adress  ..."
                                aria-describedby="basic-addon2" />
                            <span className="input-group-text py-2" id="basic-addon2">
                                SubScribe
                            </span>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="py-4 footer">
                <div className='row d-flex '>
                    <div className='col-4'>
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6 '>Hno: 277 Near Secret Gardan
                                <br /> PinCode:122142
                            </address>
                            <a href='tel:+20 1279568386' className='mt-2 d-block mb-1 text-white'>+20 1279568386</a>
                            <a href='mailto:ramyhakeem07@gmail.com' className='mt-2 d-block mb-0 text-white'>ramyhakeem07@gmail.com</a>
                            <div className='socail_icons d-flex align-items-center gap-30 mt-4 '>
                                <Link to={""} className='text-white fs-4 ' ><BsLinkedin /></Link>
                                <Link to={""} className='text-white fs-4 ' ><BsGithub /></Link>
                                <Link to={""} className='text-white fs-4 ' ><BsFacebook /></Link>
                                <Link to={""} className='text-white fs-4 ' ><BsInstagram /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Information</h4>
                        <div className='footer-link d-flex flex-column '>
                            <Link to={"/privacy-policy"} className='text-white py-2 mb-1'>Privacy Policy</Link>
                            <Link to={"refund-policy"} className='text-white py-2 mb-1'>ReFund Policy</Link>
                            <Link to={"shipping-policy"} className='text-white py-2 mb-1'>Shipping Policy</Link>
                            <Link to="term-and-condations" className='text-white py-2 mb-1'>Terms & Condations</Link>
                            <Link className='text-white py-2 mb-1'>Plogs</Link>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link to={""} className='text-white py-2 mb-1'>About Us</Link>
                            <Link to={""} className='text-white py-2 mb-1'>Faq</Link>
                            <Link to={""} className='text-white py-2 mb-1'>Contact</Link>

                        </div>
                    </div>

                    <div className='col-2'>
                        <h4 className='text-white mb-4 '>QuickLinks</h4>
                        <div className='footer-link d-flex flex-column '>
                            <Link to={""} className='text-white py-2 mb-1'>Laptops</Link>
                            <Link to={""} className='text-white py-2 mb-1'>Headphones</Link>
                            <Link to={""} className='text-white py-2 mb-1'>Tablet</Link>
                            <Link to={""} className='text-white py-2 mb-1'>Watch</Link>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="py-4 footer">
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-center mb-0 text-white'>
                            &copy; {new Date().getFullYear()} Powered by Ramy
                        </p>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Footer