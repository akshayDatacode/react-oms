import React from 'react'
import { products } from '../Home/Services/helper'

const Products = () => {
  return (
    <>
      <h1 className='pt-5 px-3'>
        Our Products
      </h1>
      <div className="row mx-0 my-5">
        {
          products && products.map((item, i) => (
            <div className='col-md-4 col-6 p-3' key={i}>
              <img
                className="border border-bottom-0 card-img-top mx-auto img-fluid img-circle d-block"
                src={require(`../../../assets/images/products/${item.img}`)}
                alt="avatar"
                height='300px'
                width='300px'
              />
              <h6 className='p-2 bg-dark text-light rounded-bottom'>Item Name</h6>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Products