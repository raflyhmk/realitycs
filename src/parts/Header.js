import React from 'react'
import Fade from 'react-reveal'

function Header(){
    return(
        <>
        <section className="header">
        <div className="container">
            <div className="row">
                <Fade>
                <div className="col-lg-6">
                    <h1 className="title-header">simple analytic tools that <br /> help you to grow your business</h1>
                    <p className="sub-header">manage your business with our</p>
                    <p className="sub-header">simple and useful analytic tools </p>
                    <button type="button" className="btn btn-danger btn-demo">try our demo</button>
                </div>
                <div className="col-lg-6 image-header">
                    <img src="image/header.png" alt="" width="100%" height="100%" />
                </div>
                </Fade>
            </div>
        </div>
    </section>
        </>
    )
}

export default Header