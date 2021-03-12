import React from 'react'

function Price(props){
    return(
        <>
        <section className="pricing">
        <h1 className="title-pricing d-flex justify-content-center">
            Price That we are offering to you
        </h1>
        <p className="sub-pricing d-flex justify-content-center">
            Choose one of our friendly pricing that suitable <br />
            for your business to grow bigger
        </p>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 subscribe">
                    <div className="box-subscribe">
                        <h1 className="title-subscribe">
                            ready
                        </h1>
                        <p className="price-subscribe">
                            $250 <span className="period">/ month</span>
                        </p>
                        <p className="sub-subscribe">
                            Suitable for those of you <br />
                            who want to grow
                        </p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>chat support</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>Optimize Projects</p>
                        <p className="point-subscribe"><i className="fas fa-times"></i>300+ Unique Project</p>
                        <p className="point-subscribe"><i className="fas fa-times"></i>Own Analytics Platform</p>
                        <p className="point-subscribe"><i className="fas fa-times"></i>Unlimited User</p>
                        <button type="button" className="btn btn-outline-danger btn-subscribe">choose this</button>
                    </div>
                </div>
                <div className="col-lg-4 subscribe">
                    <div className="box-subscribe">
                        <h1 className="title-subscribe">
                            steady
                        </h1>
                        <p className="price-subscribe">
                            $450 <span className="period">/ month</span>
                        </p>
                        <p className="sub-subscribe">
                            Suitable for those of you <br />
                            who want to grow
                        </p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>chat support</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>Optimize Projects</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>300+ Unique Project</p>
                        <p className="point-subscribe"><i className="fas fa-times"></i>Own Analytics Platform</p>
                        <p className="point-subscribe"><i className="fas fa-times"></i>Unlimited User</p>
                        <button type="button" className="btn btn-outline-danger btn-subscribe">choose this</button>
                    </div>
                </div>
                <div className="col-lg-4 subscribe" style={{backgroundColor: '#202040'}}>
                    <div className="box-subscribe">
                        <h1 className="title-subscribe">
                            go
                        </h1>
                        <p className="price-subscribe">
                            $750 <span className="period">/ month</span>
                        </p>
                        <p className="sub-subscribe">
                            Suitable for those of you <br />
                            who want to grow
                        </p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>chat support</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>Optimize Projects</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>300+ Unique Project</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>Own Analytics Platform</p>
                        <p className="point-subscribe"><i className="fas fa-check"></i>Unlimited User</p>
                        <button type="button" className="btn btn-danger btn-subscribe">choose this</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Price