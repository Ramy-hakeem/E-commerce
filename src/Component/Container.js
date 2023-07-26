import React from 'react'

function Container(props) {
    return (
        <section className={props.class1} id={props.id1}>
            <div className='container-xxl'>
                {props.children}
            </div>
        </section>
    )
}

export default Container