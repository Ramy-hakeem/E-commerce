import React from 'react'
import Path from "../Component/Path"
import PageTitle from "../Component/PageTitle"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from 'react-router-dom'
import blog1 from "../images/blog-1.jpg"
import Container from '../Component/Container'

function SingleBlog() {
    return (
        <>
            <Path title="Dynamic Blog Name" />
            <PageTitle title="Dynamic Blog Name" />

            <Container class1="single-blog-wrapper home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link className='d-flex align-items-ceter gap-10 ' to={"/blogs"} >
                                <AiOutlineArrowLeft className="fs-4" />
                                Go Back to Blogs
                            </Link>
                            <h3 className='title'>
                                A Beautiful Morning Renaissance
                            </h3>
                            <img
                                src={blog1}
                                alt='blog'
                                className='img-fluid w-100 my-4'
                            />
                            <p>
                                you're only as good as your last collection, which is an
                                enormous pressure. I think there is something about luxury
                                it's not something people need, but it's what they want. it
                                really pulls at their heart. I have a fantasic relationship
                                with money. scelerisque sociosqu ullamcorper urna nisl mollis
                                vistibulum pretim commodo inceptos cum codimentum placerat
                                diam venenais blandit hac eget dis lacus a parturient a accumasan
                                nisl ante vestibulum.
                            </p>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog