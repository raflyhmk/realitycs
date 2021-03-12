import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src="image/logo.png" alt="" width="30" height="24" />
                <span>realityc</span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav m-auto d-flex justify-content-center">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/features">Features</Link>
                  <Link className="nav-link" to="/pricing">Pricing</Link>
                  <Link className="nav-link" to="/stories">stories</Link>
                </div>
              </div>
                <Link to="/login"><button type="button" className="btn btn-outline-danger me-3">sign in</button></Link>
                <Link to="register"><button type="button" className="btn btn-danger">sign up</button></Link>
            </div>
          </nav>
    </div>
        </>
    )
}

export default Navbar