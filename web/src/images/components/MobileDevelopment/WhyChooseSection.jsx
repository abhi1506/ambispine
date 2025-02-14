import React from "react";
import { FaArrowDown } from "react-icons/fa";
// import PropTypes from "prop-types";  
import whychooseSecontion from './WhyChooseSection.module.css';
import iosservicesection from '../../images/iosservicesection.png'
import {Button} from './../button/Button';
import { FaArrowRight } from "react-icons/fa6";
const WhyChooseSection = ({ data, name, subtitle, className,heroId, heroimg }) => {
  return (
    <div className={`${whychooseSecontion['why-choose-section-container']} ${className || ""}`} 
    id={heroId} >
  <div className={whychooseSecontion['why-choose-section-main']}>
  <div className={whychooseSecontion['why-choose-section-main-left']}>
      <div className={whychooseSecontion['why-choose-section-left-content']}>   
      <h1 className={whychooseSecontion['why-choose-section-heading']}>{name}</h1>
      <p className={whychooseSecontion['why-choose-section-subtitle']}>{subtitle}</p>
      <div className={whychooseSecontion['why-choose-explore']}>
      <Button name='Explore Solution' redirect='explore-solution' icon={<FaArrowRight />} /> 
      </div>
      </div>
    </div>
  <div className={whychooseSecontion['why-choose-section-main-right']}>
      <div className={whychooseSecontion['why-choose-section-why-chooses-container']}>
      <div className={whychooseSecontion['why-choose-section-card-container']}>

        {
          data.map((data) => {
            return(
              <div className={`${whychooseSecontion['why-chooses-section-card']} ${data.className}`}>
                <h3 className={whychooseSecontion['why-choose-section-card-header']}>{data.heading}</h3>
                <p className={whychooseSecontion['why-choose-section-card-subtitle']}>{data.description}</p>
              </div>
            )
          })
        }
     </div>
         
      </div>
    </div>
   
   

  </div>
</div>
  );
};

export default WhyChooseSection;
