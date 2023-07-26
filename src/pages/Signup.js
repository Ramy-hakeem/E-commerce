import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import Container from '../Component/Container'
import CustomInput from "../Component/CustomInput"
function Signup() {
    return (
        <>
            <Path title="Create Account" />
            <PageTitle title="Sing Up" />
            <Container class1="login-wrapper home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center my-3'>Create Acount</h3>
                            <form className='d-flex flex-column gap-15'>
                                <CustomInput type='text' name="name" placeholder='Name' className='form-control' />

                                <CustomInput type='email' name="email" placeholder='Email' className='form-control' />

                                <CustomInput type='tel' name="mobile" placeholder='Mobile Number' className='form-control' />

                                <CustomInput type='password' name="password" placeholder='Password' className='form-control' />

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup