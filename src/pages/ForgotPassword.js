import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import { Link } from 'react-router-dom'
import Container from '../Component/Container'
import CustomInput from '../Component/CustomInput'
function ForgotPassword() {
    return (
        <>
            <Path title="Forgot Password" />
            <PageTitle title="Forgot Password" />

            <Container class1="login-wrapper home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center my-3'>Reset Your Password</h3>
                            <p className='text-center mt-2 mb-3'>
                                we will send you an email to rest your password
                            </p>
                            <form className='d-flex flex-column gap-15'>
                                <CustomInput type='email' name="email" placeholder='Email' className='form-control' />
                                <div className='mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                    <Link to={"/login"} className='bg-white color-dark button'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgotPassword