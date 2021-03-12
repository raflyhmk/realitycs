import React from 'react'
import Fade from 'react-reveal'

function FeaturesPage(){
    return(
        <>
        <section className="features">
        <h1 className="title-benefits d-flex justify-content-center">
            here's some our best features
        </h1>
        <p className="sub-features d-flex justify-content-center" style={{textAlign: 'center'}}>
            this features gonna make your business <br />  reach to the top of olympus.
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
                <Fade left>
                <div className="col-lg-6 image-benefits">
                    <img src="image/easytooperate.png" alt="" width="400" height="400" style={{marginTop: -30}} />
                </div>
                <div className="col-lg-6 point-benefits" style={{marginTop: 80}}>
                    <h1 className="title-point-benefits" style={{textAlign: 'right'}}>
                        interactive design
                    </h1>
                    <p className="sub-point-benefits" style={{textAlign: 'right'}}>
                        our powerful tools has interactive design on it <br />
                        so when one of your employee doing their task, <br />
                        they won't get bored because our tools <br />
                        has an eye catching micro interaction on it
                    </p>
                </div>
                </Fade>
                <Fade right>
                <div className="col-lg-6 point-benefits" style={{marginTop: 110}}>
                    <h1 className="title-point-benefits">
                        auto-recovery
                    </h1>
                    <p className="sub-point-benefits">
                        don’t worry about your data especially when <br />
                        your data get deleted by accident because <br />
                        all you need to do is contact to our services <br />
                        and we will bring back your data     
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

export default FeaturesPage