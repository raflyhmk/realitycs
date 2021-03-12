import React from 'react'
import Fade from 'react-reveal'

function StoriesReview(props){
    return(
        <>
        <section className="stories-review">
        <h1 className="title-stories d-flex justify-content-center">
            here's what they are saying about us
        </h1>
        <p className="sub-stories d-flex justify-content-center">
            they already make their business reach to the top of olympus <br />
            with our tools. so what do you think?
        </p>
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
                </div>
                </Fade>
                <Fade left>
                <div className="col-lg-6 image-review">
                    <img src="image/review2.png" alt="" />
                </div>
                <div className="col-lg-6 content-review">
                    <p className="desc-review">
                        “this is the most powerful analytic tools 
                        that i have ever tried, realytic really help me 
                        to manage my business more easily
                        really fast”  
                    </p>
                    <h1 className="name-review">Nolan Dias - 
                        <span className="job-review">CEO of power company</span>
                    </h1>
                </div>
                </Fade>
                <Fade right>
                <div className="col-lg-6 image-review">
                    <img src="image/review3.png" alt="" />
                </div>
                <div className="col-lg-6 content-review">
                    <p className="desc-review">
                        “this analytic tools is really powerful that i have ever tried, 
                        this tools really help me 
                        to manage my business more easily and efficient”  
                    </p>
                    <h1 className="name-review">Jakob Westervelt - 
                        <span className="job-review">CEO of wave company</span>
                    </h1>
                </div>
                </Fade>
            </div>
        </div>
        </section>
        </>
    )
}

export default StoriesReview