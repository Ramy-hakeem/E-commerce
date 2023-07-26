import React from 'react'
import PageTitle from '../Component/PageTitle'
import Path from "../Component/Path"
import { AiOutlineHome } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import Container from '../Component/Container'

function Contact() {
    return (
        <>
            <PageTitle title={"Contact Us"} />
            <Path title={"Contact"} />
            <Container class1="contact-wrapper home-wrapper-2 py-5">
                <div className='row ps-4'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.963961087209!2d31.256521816324053!3d30.128637578863003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14586ab69ae91d61%3A0x98f759f98470c9a6!2s21%20Mecca%20Ln%2C%20Begam%2C%20Shubra%20El%20Kheima%201%2C%20Al%20Qalyubia%20Governorate%206216420!5e0!3m2!1sen!2seg!4v1688299081339!5m2!1sen!2seg"
                            width="600"
                            height="450"
                            className='border-0 w-100'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='contact-inner-wrapper d-flex justify-content-between '>
                            <div >
                                <h3 className='contact-title mb-4'> Contact</h3>
                                <form className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' placeholder='Name' className='form-control w-100' />
                                    </div>
                                    <div>
                                        <input type='email' placeholder='Email' className='form-control w-100' />
                                    </div>
                                    <div>
                                        <input type='tel' placeholder='Mobile Number' className='form-control w-100 ' />
                                    </div>
                                    <div>
                                        <textarea
                                            className='w-100 form-control'
                                            cols="30"
                                            rows="4"
                                            placeholder='Comments'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button className='button border-0'>Submit</button>
                                    </div>

                                </form>

                            </div>
                            <div>
                                <h3 className='contant-title mb-4'>Get in touch with us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <AiOutlineHome />
                                            <address className='mb-0'>Hno: 277 Near Secret Gardan</address>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BiPhoneCall className='fs-5 ' />
                                            <a href='tel:+20 1279568386'>+20 1279568386</a>
                                        </li>

                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <AiOutlineMail className='fs-5' />
                                            <a href='mailto:ramyhakeem07@gmail.com'>ramyhakeem07@gmail.com</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BsInfoCircle className='fs-5' />
                                            <p className='mb-0'>Sunday - thursday 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Contact