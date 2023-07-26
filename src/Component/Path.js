import React from 'react'
import { Link } from "react-router-dom"

function Path(props) {
    const { title } = props
    return (
        <section className='path-to-store mb-0 py-4'>
            <div className='container-xxl'>
                <div className='row ps-4'>
                    <div className='col-12 '>
                        <p className='text-center mb-0'>
                            <Link className='text-dark' to={"/"}>
                                Home /
                            </Link>
                            &nbsp; {title}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Path