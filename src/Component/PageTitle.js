import React from 'react'
import { Helmet } from 'react-helmet'

function PageTitle(props) {
    const { title } = props
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
    )
}

export default PageTitle