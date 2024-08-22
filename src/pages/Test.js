import React, { useContext } from 'react';
import { MainContext } from "../context/MainContext";
import { Link } from 'react-router-dom';

function Test() {
    const { featureProd } = useContext(MainContext);
    console.log(featureProd)
    return (
        <>
            {featureProd.map((product => (
                <div key={product.id} className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src={product.image} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    {
                                        [...Array(5)].map((_, index) => (
                                            <i
                                                key={index}
                                                className={`fa fa-star ${index < product.ratings ? 'text-warning' : 'text-muted'}`}
                                            ></i>
                                        ))
                                    }
                                </li>
                                <li className="text-muted text-right">Rs {product.price}</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">{product.name}</a>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <p className="text-muted">Reviews ({product.reviews})</p>
                            <p className="text-center"><Link to="/view" className="btn btn-success">View</Link></p>

                        </div>
                    </div>
                </div>
            )))
            }
        </>
    );
}

export default Test;
