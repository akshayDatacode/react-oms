import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <div className="row mx-0 my-5">
        <div className="col-md-6 col-12">
          <img
            className="card-img mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/contact.png")}
            alt="avatar"
          />
        </div>
        <div className="col-md-6 col-12 p-5">
          <h1 className=''>Reach out to us!</h1>
          <p>If you’re interested in working with Tidy Spaces on your next project, please contact us.</p>
          <h6><i className="far fa-envelope me-3" /><span>tidyspaces@gmail.com</span></h6>
          <h6><i className="far fa-phone-alt me-3" /><span>8826172385</span></h6>
          <div className="d-flex mt-3 align-items-center">
            <span>Follow us: </span>
            <a href="" target="_blank"></a><i className="fab fa-facebook mx-2" />
            <i className="fab fa-instagram mx-2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact