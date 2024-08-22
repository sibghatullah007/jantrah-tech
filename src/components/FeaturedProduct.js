import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedProduct({ name, image, ratings, price, description, reviews }) {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <a href="shop-single.html">
                    <img src={image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            {
                                [...Array(5)].map((_, index) => (
                                    <i
                                        key={index}
                                        className={`fa fa-star ${index < ratings ? 'text-warning' : 'text-muted'}`}
                                    ></i>
                                ))
                            }
                        </li>
                        <li className="text-muted text-right">Rs {price}</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{name}</a>
                    <p className="card-text">
                        {description}
                    </p>
                    <p className="text-muted">Reviews ({reviews})</p>
                    <p className="text-center"><Link to="/view" className="btn btn-success col-12">View</Link></p>

                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct