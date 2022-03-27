import React, { useEffect } from 'react'
import Process from '../Process/Process'
import Services from './Services'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
              <h1>Welcome to Tidy Spaces</h1>
              <p>
                “Tidy Spaces” is truly a one-stop shop for your closet transformation. We execute
                each step from the planning, de-cluttering, and organizing of your space to ensure a final
                result that is nothing less than perfection.
              </p>
            </div>
          </div>
          <div className='row my-5 pt-md-5 py-1 mx-0 services-section'>
            <div className="col-12 p-md-5 p-0">
              <div className="row mx-0">
                <div className="col-12 col-md-6 p-2 p-md-5">

                  <h1 className='text-center'>Our Services</h1>
                  <p className='text-center'>We orgnaize every space in a home, from kids room and kitchen, to wardrobes and balconies. We also help you to de-clutter your office space and provide moving home services.</p>
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