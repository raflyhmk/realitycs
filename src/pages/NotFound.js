import React from 'react'
import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <>
        <div className="notfound">
            <img src="image/404.png" alt="" style={{width: 400}}/>
            <h1 className="notfound-title">Opss! there is nothing in here</h1>
            <p className="sub-notfound">
            page that you’re looking for isn’t found. <br />
            We suggest you Back to Homepage.
            </p>
            <Link to='/'>
            <button type="button" className="btn btn-danger btn-404">back to home</button>
            </Link>
        </div>
        </>
    )
}

export default NotFound