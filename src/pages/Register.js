import React from 'react'
import {Link} from 'react-router-dom'

function Register(){
    return(
        <>
        <section className="login">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 image-login">
                    <img src="image/login.png" alt="" style={{marginTop: 70}} />
                </div>
                <div className="col-lg-6 form-login">
                    <h1 className="title-login">register to start</h1>
                    <p className="sub-login">Please fill all the blank field <br />
                        down this below.</p>
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
                        <h2 className="title-form">
                            phone number
                        </h2>
                        <div className="box-form">
                            <i className="fas fa-phone"></i>
                            <input type="text" placeholder="your phone number" />
                        </div>
                        <button type="button" className="btn btn-danger btn-login">sign up</button>
                        <p className="register">by sign up this form this mean I agree <br /> to the <Link to="/" style={{color: '#16c79a'}}>terms and conditions </Link>that apply</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Register