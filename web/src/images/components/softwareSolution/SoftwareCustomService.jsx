import React from 'react'
import './SoftwareCustomService.css'

// import PropTypes from "prop-types"

const SoftwareCustomService = () => {
  const data=[
    {
      id:1,
      header:"Business Productivity Solutions"
    },
    {
      id:2,
      header:"Business Productivity Solutions"
    },
    {
      id:3,
      header:"Business Productivity Solutions"
    },
    {
      id:4,
      header:"Business Productivity Solutions"
    }
  ]
  return (

  <div className='soft-custom-service-container'>
  
    <div className='soft-custom-card-left'>
      <div className='cms-feature-left-content'>  
      <h1 className='soft-custom-heading'>Custom Software Development Services </h1>
      <p className='soft-custom-subtile'>We build tailored software solutions to meet your unique business needs, delivering the highest growth potential</p>
      </div>
    </div>
    <div className='soft-custom-card-right'>
      <div className='soft-custom-card-container'>
        {
          data.map((data) => {
            return(
              <div key={data.id} className='soft-custom-card'>
                <h3 className='softt-custom-card-header'>{data.header}</h3>
              </div>
            )
          })
        }
         
      </div>
    </div>

  </div>

  );
};

export default SoftwareCustomService;
