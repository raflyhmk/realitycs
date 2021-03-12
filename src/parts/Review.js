import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'

function Review(){
    return(
        <>
        <section className="review">
        <div className="container">
            <div className="row">
                <Fade right>
                <div className="col-lg-6 image-review">
                    <img src="image/user.png" alt="" />
                </div>
                <div className="col-lg-6 content-review">
                    <p className="desc-review">
                        “this is the most powerful analytic tools 
                        that i have ever tried, by using realytic 
                        i can manage my business more easily
                        really fast.”  
                    </p>
                    <h1 className="name-review">Nolan Schleifer - 
                        <span className="job-review">CEO of rhitta company</span>
                    </h1>
                    <Link to="stories"><button type="button" className="btn btn-danger btn-stories">see other stories</button></Link>
                </div>
                </Fade>
            </div>
        </div>
    </section>
        </>
    )
}

export default Review