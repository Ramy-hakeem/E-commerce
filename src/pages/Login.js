import React from 'react'
import Path from '../Component/Path'
import PageTitle from '../Component/PageTitle'
import { Link } from 'react-router-dom'
import Container from '../Component/Container'
import CustomInput from '../Component/CustomInput'

function Login() {
    return (
        <>
            <Path title='Login' />
            <PageTitle title='Login' />

            <Container class1="login-wrapper home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center my-3'>Login</h3>
                            <form className='d-flex flex-column gap-15'>
                                <CustomInput type='email' name="email" placeholder='Email' className='form-control' />
                                <CustomInput type='password' name="password" placeholder='Password' className='form-control' />
                                <div>
                                    <Link to={"/forgot-password"}>Forget Password?</Link>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Login</button>
                                    <Link to={"/signup"} className='signup button'>SignUp</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Login