import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <>
        <footer style={{backgroundImage: 'url(image/footer.png)'}}>
        <h1 className="title-footer d-flex justify-content-center">
            simple analytic tools that <br />
            help you to grow up your business
        </h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 sub-footer">
                    <img src="image/logo.png" alt="" />
                    <span className="company">realityc inc</span>
                    <p className="sub-company">
                        helps people to manage their <br />
                        business easily and fast
                    </p>
                </div>
                <div className="col-lg-3 sub-footer">
                    <h1 className="title-sub-footer">
                        explore
                    </h1>
                    <p className="link-footer"><Link to="/">our services</Link></p>
                    <p className="link-footer"><Link to="/">equity system</Link></p>
                    <p className="link-footer"><Link to="/">refund</Link></p>
                    <p className="link-footer"><Link to="/">shareholder</Link></p>
                </div>
                <div className="col-lg-3 sub-footer">
                    <h1 className="title-sub-footer">
                        account
                    </h1>
                    <p className="link-footer"><Link to="/">my account</Link></p>
                    <p className="link-footer"><Link to="/">register</Link></p>
                    <p className="link-footer"><Link to="/">tutorials</Link></p>
                    <p className="link-footer"><Link to="/">benefits</Link></p>
                </div>
                <div className="col-lg-3 sub-footer">
                    <h1 className="title-sub-footer">
                        office
                    </h1>
                    <p className="link-footer"><Link to="tel:+62878555409">+62-878-5554-09</Link></p>
                    <p className="link-footer">cigenting, bandung  no. 7 <br />
                        (realytic inc.)</p>
                    <p className="link-footer"><Link to="mailto:techinal@realytic.inc">techinal@realytic.inc</Link></p>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer