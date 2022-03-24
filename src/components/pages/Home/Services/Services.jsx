import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import { servicesTypes } from './helper';

import ServiceCard from './ServiceCard'

const Services = () => {

  const [activeTable, setActiveTable] = useState('');

  const toggle = (openTable) => {
    if (openTable === activeTable) {
      return setActiveTable('');
    }
    setActiveTable(openTable)
  }

  return (
    <>
      <div className='row mx-0 my-5'>
        <div className="col-12 p-0">
          {
            servicesTypes && servicesTypes.map((item, i) => (
              <div key={i} className="my-5">
                <div onClick={() => toggle(i)} className="d-flex justify-content-between border-bottom pb-3 align-items-center">
                  <div className="d-md-flex d-block align-items-center">
                    <img
                      className="border rounded-circle header-profile-img"
                      height="150"
                      width="150"
                      loading="lazy"
                      src={require(`../../../../assets/images/${item.img}`)}
                      alt="avatar"
                    />
                    <div className="">
                      <h4 className={`mx-3 mb-0 text-left ${activeTable === i && 'active'}`}>{item.name}</h4>
                      <p className='my-2'>{item.description}</p>
                    </div>
                  </div>
                  {
                    activeTable === i ?
                      <i className="fas fa-minus" />
                      :
                      <i className="fas fa-plus" />
                  }
                </div>

                <Collapse isOpen={activeTable === i}>
                  <div className="row mx-0 d-flex">
                    {
                      item.types && item.types.map((elem, j) => (
                        <div key={j} className="col-md-4 col-12 p-0">
                          <ServiceCard title={elem.title} img={elem.img} />
                        </div>
                      ))
                    }
                  </div>
                </Collapse>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Services