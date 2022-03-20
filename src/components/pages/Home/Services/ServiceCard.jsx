import React from 'react'

const ServiceCard = ({
  title,
  img,
}) => {
  return (
    <>
      <div className='row mx-0 service-card'>
        <div className="col-12 p-3">
          <div className="">
            <img
              className="card-img-top mx-auto img-fluid img-circle d-block"
              src={require(`../../../../assets/images/${img}`)}
              alt="avatar"
            />
            <div className="border rounded-bottom p-4">
              <h6>{title}</h6>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ServiceCard