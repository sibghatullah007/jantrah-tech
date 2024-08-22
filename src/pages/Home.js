import React, { useContext } from 'react'
import banner_img_01 from '../images/banner_img_01.jpg'
import banner_img_02 from '../images/banner_img_02.jpg'
import banner_img_03 from '../images/banner_img_03.jpg'
import CategoryOfMonth from '../components/Category_of_Month'
import { MainContext } from '../context/MainContext'
import FeaturedProduct from '../components/FeaturedProduct'

function Home() {
  const { category, featureProd } = useContext(MainContext)
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide bg-home">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={banner_img_01} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success"><b>Zay</b> eCommerce</h1>
                    <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                    <p>
                      Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                      This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com">TemplateMo</a> website.
                      Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/">Freepik Stories</a>,
                      <a rel="sponsored" className="text-success" href="https://unsplash.com/">Unsplash</a> and
                      <a rel="sponsored" className="text-success" href="https://icons8.com/">Icons 8</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={banner_img_02} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Proident occaecat</h1>
                    <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                    <p>
                      You are permitted to use this Zay CSS template for your commercial websites.
                      You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={banner_img_03} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Repr in voluptate</h1>
                    <h3 className="h2">Ullamco laboris nisi ut </h3>
                    <p>
                      We bring you 100% free CSS templates for your websites.
                      If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row">
          {category.map((cat) => (
            <CategoryOfMonth key={cat.id} catName={cat.name} catImage={cat.image} />
          ))
          }
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className='row'>
          {featureProd.map((product) => (
                <FeaturedProduct key={product.id} {...product}/>
            ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home