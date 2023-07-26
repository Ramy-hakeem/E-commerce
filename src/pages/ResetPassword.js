import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import Container from '../Component/Container'
import CustomInput from "../Component/CustomInput"
function ResetPassword() {
    return (
        <>
            <Path title="Rest Password" />
            <PageTitle title="Reset Password" />

            <Container class1="login-wrapper home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center my-3'>Rest Password</h3>
                            <form className='d-flex flex-column gap-15'>

                                <CustomInput type='password' name="password" placeholder='Password' className='form-control' classdiv='mt-1' />
                                <CustomInput type='password' name="confpassword" placeholder='Confirm Password' className='form-control' classdiv='mt-1' />

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Reset</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword