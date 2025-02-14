import React from 'react'
import Herosection2 from '../MobileDevelopment/Herosection2'
import crmupate4 from '../../images/crmupate4.png';
import crmupate5 from '../../images/software-custom1.png';

import './softwareSolution.css';
import SoftwareCustomService from './SoftwareCustomService';
import {  SoftwareDevelopmentCard } from './SoftwareDevelopmentCard'

import SoftwareDevelopmentContainer from './SoftwareDevelopmentCard';
import ConsultNow from '../ConsultNow/ConsultNow';


export default function SoftwareSolutionUpdate() {
  const data1=[
    {
      id:1,
      header:"Business Productivity Solutions",
      subtitle:"Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",

    },
    {
      id:2,
      header:"Business Productivity Solutions",
      subtitle:"Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    
    },
    {
      id:3,
      header:"Business Productivity Solutions",
      subtitle:"Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",

    },
    {
      id:4,
      header:"Business Productivity Solutions",
      subtitle:"Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    }
  ]

  return (
    <div className='software-solution-page'>
     <Herosection2 heading="Transform Your Business with Custom Software Solutions"
      subtitle="Our expert software developers help you boost work efficiency and create innovative solutions to drive your business forward."
      className="here-text-mid "
      heroimg={crmupate4}
      />
      
        <SoftwareCustomService />
        <SoftwareDevelopmentCard data1={data1} heading='Content'/>
        <SoftwareDevelopmentCard  data1={data1} heading='Feature'/>
      <SoftwareDevelopmentContainer />
      <div className='our-experty-section'>
        <h1 className='our-experties-heading'>Our Technology Expertise</h1>
        <div className='our-experties-container'>
              <img src={crmupate5} className="our-experti-img" alt='expetiyes technologies' />
        </div>
      </div>
      <ConsultNow />
    </div>
  )
}
