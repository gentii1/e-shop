import React from 'react'
import { Link } from 'react-router-dom'


//styles
import './ErrorPage.scss'

export const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <div className="error_wrapp">
            <div className="error__tittle">
              <h1><Link to="/">Home</Link></h1>
            </div>
            <span>Not Found  <b>404</b></span>
            </div>
        </div>
    )
}
