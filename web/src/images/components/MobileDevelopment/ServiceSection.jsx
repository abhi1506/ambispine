import React from "react";
import { FaArrowDown } from "react-icons/fa";
// import PropTypes from "prop-types";  
import servicesSecontion from './ServiceSecontion.module.css';
import iosservicesection from '../../images/iosservicesection.png'

const SecondSection = ({ data, name, subtitle, className,heroId, heroimg }) => {
  return (
    <div className={`${servicesSecontion['service-section-container']} ${className || ""}`} 
    id={heroId} >
  <div className={servicesSecontion['service-section-main']}>
  <div className={servicesSecontion['service-section-main-right']}>
      <div className={servicesSecontion['service-section-services-container']}>
      <div className={servicesSecontion['service-section-card-container']}>

        {
          data.map((data) => {
            return(
              <div className={`${servicesSecontion['services-section-card']} ${data.className}`}>
                <h3 className={servicesSecontion['service-section-card-header']}>{data.heading}</h3>
                <p className={servicesSecontion['service-section-card-subtitle']}>{data.description}</p>
              </div>
            )
          })
        }
     </div>
         
      </div>
    </div>
    <div className={servicesSecontion['service-section-main-left']}>
      <div className={servicesSecontion['service-section-left-content']}>
        
      <h1 className={servicesSecontion['service-section-heading']}>{name}</h1>
      <p className={servicesSecontion['service-section-subtitle']}>{subtitle}</p>
      </div>
    </div>
   

  </div>
</div>
  );
};

export default SecondSection;
