import React, { Fragment } from 'react'
import "./SearchEngine.css";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import searchImage from "../../assets/content/co.png";
import FAQ from "../card/FaqsSection";
import seoHeroImage from "../../assets/content/seo.png"
import SeoProcess from './SeoProcess';
import FAQSection from '../FAQSection/FAQSection';
import ConsultNow from '../ConsultNow/ConsultNow';

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, driving more organic traffic to your site and improving visibility.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO results typically take 3-6 months to become noticeable, depending on the competition, target keywords, and your website’s current SEO health.",
  },
  {
    question: "Do I need SEO if my website already gets traffic?",
    answer: "Yes! Even if you are receiving traffic, SEO can help you further optimize your website for better conversion rates, increased visibility, and sustained growth over time.",
  },
  {
    question: "Can SEO help my local business?",
    answer: "Absolutely! Local SEO is essential for businesses aiming to attract customers within a specific geographic area. It helps improve visibility in local search results.",
  },
  {
    question: "Will SEO work for any business?",
    answer: "Yes, SEO is beneficial for businesses across all industries. Whether you're in e-commerce, healthcare, or real estate, SEO can help you reach a wider audience and drive quality traffic.",
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer: "We measure SEO success through metrics like keyword rankings, organic traffic growth, conversion rates, and return on investment (ROI). Regular reports are provided to track progress.",
  },
];
const cardsData = [
  {
    title: "Content SEO",
    description: "We provide top-notch content writing services tailored to your needs.",
    imageSrc: cloudServicesImage, 
  },
  {
    title: "Web Development",
    description: "Build modern, responsive, and user-friendly websites with our team.",
    imageSrc: cloudServicesImage, 
  },
  {
    title: "SEO Links",
    description: "Boost your online presence with our digital marketing solutions.",
    imageSrc: cloudServicesImage, 
  },
];

  

const   SearchEngine = () => {
 
    
  return (
    <Fragment>
 <div className="seo-hero">
      <div className='seo-hero-img-full'>
      <img src={seoHeroImage} alt="Professional content writing" className="seo-hero-img" />
      </div>
      <div className="seo-hero-left">
        <div className='seo-hero-content'>
          <h1>Search Engine Optimization Service</h1>
          <p>
          Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help
          in boosting the revenue and gaining maximum growth. In this era of tec
          </p>
        </div>
      </div>
    </div>
     
     <div className="seo-main-container">
     <div className="seo-content-center">
  <h1 className="">Our Comprehensive SEO Services</h1>
  <p className="">
    Technology helps things get better! It makes them smaller, faster, and more efficient. 
    Your Android app should not only enhance your company’s image but also provide an intuitive 
    experience for your audience. Well-designed Android applications contribute to increased 
    revenue and business growth. In today’s tech-driven world, having a robust Android app is 
    essential for staying ahead in the digital landscape.
  </p>
</div>

     <section className="Content-writing-container ">
      
     <div className="">
    <SeoProcess/>
     </div>
</section>



<section className="seo-section py-5">
<div className="container">
<div className="row align-items-center">
{/* Left Content */}
<div className="col-lg-6 col-md-12">
  <h3 className="fw-bold">Why Us?</h3>
  <p>
    SEO is not about ranking for popular terms; it's all about being found
    everywhere, when it matters the most. If you choose us as partners,
    we will make sure that we take a full audit of your entire website,
    including keywords, content, and page structure as well.
  </p>
  <p>
    Our dedicated team ensures that your brand is optimized for the
    competitive digital world. From strategy to execution, we help you
    drive organic growth and stay ahead.
  </p>
</div>

{/* Right Image */}
<div className="col-lg-6 col-md-12 d-flex justify-content-center text-center">
  <img
    src={searchImage}
    alt="Why Choose Us"
    className="img-fluid rounded"
  />
</div>
</div>
</div>
</section>




<FAQSection faqData={faqs}/>

<ConsultNow/>
     </div>
    </Fragment>
  );
};

export default    SearchEngine;
