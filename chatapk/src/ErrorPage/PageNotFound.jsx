import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='notFound'>
        <h1>Page Not Found</h1>
        <Link to='/' className="btn"><h2> Go Home </h2></Link>
    </div>
  )
}

export default PageNotFound