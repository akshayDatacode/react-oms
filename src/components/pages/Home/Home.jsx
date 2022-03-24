import React from 'react'
import Process from '../Process/Process'
import Services from './Services'

const Home = () => {

  return (
    <>
      <div className='row mx-0 my-md-5 my-3'>
        <div className="col-12">
          <img
            className="card-img mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/hero.png")}
            alt="avatar"
          />
          <div className="text-center my-5 py-md-5 py-3 row mx-0 justify-content-center">
            <div className="col-md-10 col-12">
              <h1>Welcome to Tidy Wardrobes</h1>
              <p>It’s hard to feel inspired by cluttered spaces and even harder to know how to get started on the road to reclaiming them. And since we’re all so busy these days, who has free time to allocate to organizing? We do!</p>
              <p>
                Award-winning professional organizers, Tidy Nest, organizes your existing spaces to make them feel brand new. We appreciate how daunting it can feel when you’re facing a disorganized space full of kids’ toys, old clothes, or mountains of papers. But no matter how large or small a project, we simplify and stylize your space to make it more functional, practical and attractive.
              </p>
              <p>
                While we have done jobs as far as Los Angeles, we most frequently work in Fairfield & Westchester Counties and New York City.  Click here to see some of our previous projects.
              </p>
            </div>
          </div>
          <div className='row my-5 pt-md-5 py-1 mx-0 services-section'>
            <div className="col-12 p-md-5 p-0">
              <div className="row mx-0">
                <div className="col-12 col-md-6 p-2 p-md-5">

                  <h1 className='text-center'>Our Services</h1>
                  <p className='text-center'>While we have done jobs as far as Los Angeles, we most frequently work in Fairfield & Westchester Counties and New York City.  Click here to see some of our previous projects.</p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className="card-img-top mx-auto img-fluid img-circle d-block"
                    src={require(`../../../assets/images/ourservices.png`)}
                    alt="avatar"
                    height='300px'
                    width='300px'
                  />
                </div>
              </div>
              <Services />
            </div>
          </div>
          <div className='row my-5 mx-0 services-section'>
            <div className="col-12 py-5 px-0">
              <Process />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home