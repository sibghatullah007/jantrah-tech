import React from 'react'
import { Link } from 'react-router-dom'

function Category_of_Month({catName,catImage}) {
  return (
    <div className="col-12 col-md-4 p-5 mt-3">
      <img src={catImage} className="rounded-circle img-fluid border" alt="Category" />
      <h5 className="text-center mt-3 mb-3">{catName}</h5>
      <p className="text-center"><Link to="/view" className="btn btn-success">View</Link></p>
    </div>
  )
}
export default Category_of_Month