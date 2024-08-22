import React, { useContext } from 'react'
import banner_img_01 from '../images/banner_img_01.jpg'
import banner_img_02 from '../images/banner_img_02.jpg'
import banner_img_03 from '../images/banner_img_03.jpg'
import Category_of_Month from '../components/Category_of_Month'
import { MainContext } from '../context/MainContext'

function Home() {
  const {category} = useContext(MainContext)
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide bg-home">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={banner_img_01} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                    <h3 class="h2">Tiny and Perfect eCommerce Template</h3>
                    <p>
                      Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                      This template is 100% free provided by <a rel="sponsored" class="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                      Image credits go to <a rel="sponsored" class="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                      <a rel="sponsored" class="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                      <a rel="sponsored" class="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={banner_img_02} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Proident occaecat</h1>
                    <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                    <p>
                      You are permitted to use this Zay CSS template for your commercial websites.
                      You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={banner_img_03} alt=""/>
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Repr in voluptate</h1>
                    <h3 class="h2">Ullamco laboris nisi ut </h3>
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="row">
            {category.map((cat)=>(
              <Category_of_Month key={cat.id} catName={cat.name} catImage={cat.image}/>
            ))
            }
        </div>
    </section>
    </>
  )
}

export default Home