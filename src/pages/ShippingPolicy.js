import React from 'react'
import Path from '../Component/Path'
import PageTitle from '../Component/PageTitle'
import Container from '../Component/Container'
function ShippingPolicy() {
    return (
        <>
            <PageTitle title={"Shipping Policy"} />
            <Path title={"Shipping Policy"} />

            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'></div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShippingPolicy