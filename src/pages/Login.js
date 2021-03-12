import React from 'react'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <>
        <section className="login">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 image-login">
                    <img src="image/login.png" alt="" style={{marginTop: 70}} />
                </div>
                <div className="col-lg-6 form-login">
                    <h1 className="title-login">login to continue</h1>
                    <p className="sub-login">Please log in using that account has <br />
                        registered on the website.</p>
                    <div className="input-form">
                        <h2 className="title-form">
                            email
                        </h2>
                        <div className="box-form">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="your email address" />  
                        </div>
                        <h2 className="title-form">
                            password
                        </h2>
                        <div className="box-form">
                            <i className="fas fa-key"></i>
                            <input type="password" placeholder="your password" />
                        </div>
                        <p className="forgot"><Link to="">forgot your password?</Link></p>
                        <button type="button" className="btn btn-danger btn-login">sign in</button>
                        <p className="register">dont have an account? <Link to="#" style={{color: '#16c79a'}}>register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Login