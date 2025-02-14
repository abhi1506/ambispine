import React from 'react'
import './Homepageupdate.css'
import HomeGeroo from '../home/HomeGeroo';
import NetworkSectionHome from './NetworkSectionHome';

// import industrycloud  from './../../images/industry-cloud.png'
// import ImgContRightHeroSection from './ImgContRightHeroSection';
import AISolutions from "../home/AISolutions";
import ServicesSection from "./../home/ServiceSection";
import NewsCarousel from "./../home/NewsCarousel";
export default function Homeupdate() {
  return (
    <div className='home-page-update'>
      <HomeGeroo />
      <NetworkSectionHome />
      {/* <ImgContRightHeroSection 
      leftImg={cmsimg}
      rheading='Spread Your Wings, Expand Your Network'
      rsubtitle='Expand your reach and influence. Grow your connections, increase
              your opportunities, and access to resources. Make a bond with new
              possibilities and horizons.'
              imgclss=''
      /> */}
      <div className='cloud-home-sectoin'>
      <AISolutions />
      </div>
     
        <ServicesSection />

        <NewsCarousel />
    </div>
  )
}
