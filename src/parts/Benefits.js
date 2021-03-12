import React from 'react'
import Fade from 'react-reveal'

function Benefits(){
    return(
        <>
        <section className="benefits">
        <h1 className="title-benefits d-flex justify-content-center">
            our top benefits
        </h1>
        <p className="sub-benefits d-flex justify-content-center">
            you can easily manage your business with our powerfull tools
        </p>
        <div className="container">
            <div className="row">
                <Fade right>
                <div className="col-lg-6 point-benefits" style={{marginTop: 100}}>
                    <h1 className="title-point-benefits">
                        Real-Time Analytic
                    </h1>
                    <p className="sub-point-benefits">
                        with a real-time analytic you can 
                        always check <br /> the data of your business
                        directly in real-time. <br /> this is can help you 
                        to grow your business <br /> fast and accurate.
                    </p>
                </div>
                <div className="col-lg-6 image-benefits">
                    <img src="image/realtimeanalytic.png" alt="" width="600" height="400" style={{marginTop: 0}} />
                </div>
                </Fade>
                <Fade left>
                <div className="col-lg-6 image-benefits">
                    <img src="image/easytooperate.png" alt="" width="400" height="400" style={{marginTop: -30}} />
                </div>
                <div className="col-lg-6 point-benefits" style={{marginTop: 80}}>
                    <h1 className="title-point-benefits" style={{textAlign: 'right'}}>
                        easy to operate
                    </h1>
                    <p className="sub-point-benefits" style={{textAlign: 'right'}}>
                        our powerful tools is a friendly user tools <br />
                        that everyone can operate from beginners to <br />
                        experts. so every of your employee can manage <br />
                        their task easily without being difficult
                    </p>
                </div>
                </Fade>
                <Fade right>
                <div className="col-lg-6 point-benefits" style={{marginTop: 110}}>
                    <h1 className="title-point-benefits">
                        Fully Secured
                    </h1>
                    <p className="sub-point-benefits">
                        don’t worry about your data privacy <br />
                        we are gonna make sure that your <br />
                        data privacy is secure with our high tech
                        security 
                    </p>
                </div>
                <div className="col-lg-6 image-benefits">
                    <img src="image/fullysecured.png" alt="" width="550" height="400" style={{marginTop: -40}} />
                </div>
                </Fade>
            </div>
        </div>
   
    </section>
        </>
    )
}

export default Benefits