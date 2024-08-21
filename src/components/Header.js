import React from 'react'
import { Outlet, Link } from 'react-router-dom'
function Header() {
  return (
    <>
        {/* Start Top nav */}
        <nav className='navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block'>
            <div className='container text-light'>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <i className='fa fa-envelope mx-2'></i>
                        <a className='navbar-sm-brand text-light fw-light text-decoration-none' href='mailto:info@jantrahtech.com'>info@jantrahtech.com</a>
                        <i className='fa fa-phone mx-2'></i>
                        <a className='navbar-sm-brand text-light fw-light text-decoration-none' href='tel:info@jantrahtech.com'>+92 317 6824920</a>
                    </div>
                    <div>
                        <a className='text-light' href='https://fb.com/'><i className='fab fa-facebook fa-sm fa-fw me-2'></i></a>
                        <a className='text-light' href='https://www.instagram.com/'><i className='fab fa-instagram fa-sm fa-fw me-2'></i></a>
                        <a className='text-light' href='https://twitter.com/'><i className='fab fa-twitter fa-sm fa-fw me-2'></i></a>
                        <a className='text-light' href='https://www.linkedin.com/'><i className='fab fa-linkedin fa-sm fa-fw me-2'></i></a>
                    </div>
                </div>
            </div>
        </nav>
        {/* End Top Nav */}
        {/* Header Srart */}
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className='container d-flex justify-content-between align-items-center'>
                <p className='logo text-dark h1 align-self-center'><span className='text-success'>Jantrah</span> Tech</p>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <Link className='nav-link' to="/">
                        <li className="nav-item">
                            <button className="nav-link">Home</button>
                        </li>
                        </Link>
                        <Link className='nav-link' to="/about">
                        <li className="nav-item">
                            <button className="nav-link">About</button>
                        </li>
                        </Link>
                        <Link className='nav-link' to="/shop">
                        <li className="nav-item">
                            <button className="nav-link">Shop</button>
                        </li>
                        </Link>
                        <Link className='nav-link' to="/contact">
                        <li className="nav-item">
                            <button className="nav-link">Contact</button>
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                            <div className="input-group-text">
                                <i className="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <span className="nav-icon poiner d-none d-lg-inline" data-bs-toggle="modal" role='button' data-bs-target="#templatemo_search">
                        <i className="fa fa-fw fa-search text-dark mr-2"></i>
                    </span>
                    <Link to="/cart">
                    <span className="nav-icon position-relative text-decoration-none">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </span>
                    </Link>
                    <Link to="/profile">
                    <span className="nav-icon position-relative text-decoration-none">
                        <i className="fa fa-fw fa-user text-dark mr-3"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </span>
                    </Link>
                </div>
            </div>
            </div>
        </nav>
        {/* Header End */}
    <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header