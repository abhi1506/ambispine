import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../data/newsMockData";
import newsHero1 from "../../assets/AI.jpg";
import "./newssection.css";

const NewsSection = ({ news }) => {
  
  const data = news.length > 0 ? news : newsData;

  const eventData = Array.isArray(data) ? data[0] : data;


  return (
    <section className="news-section">
      <div className="news-container">
        {/* Left Column */}
        <div className="main-content-news">
          <h2 className="section-title">Upcoming Event & Launches</h2>
          <div className="event-details">
            <p className="link-subtitle">{data?.mainEvent?.linkText || eventData?.content}</p>
            <h3 className="event-title">{data?.mainEvent?.title || eventData?.title}</h3>
            <p className="event-subtitle">{data?.mainEvent?.eventData?.title}</p>
          </div>

          <div className="featured-image">
            <img
              src={data?.mainEvent?.imageUrl || eventData?.images[0]?.url
                }
              alt="Featured news"
              className="main-image"
            />
          </div>
        </div>

       
        <div className="features-list">
         {(Array.isArray(data) ? data : data?.features || []).map((feature) => (
   <Link
   to={`/news/${feature?.id || feature?._id}`}
   key={feature?.id}
   className="feature-card"
 >
 
      <div className="feature-image">
        <img 
          src={feature?.imageUrl || feature?.images?.[0]?.url} 
          alt={feature?.title} 
        />
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{feature?.title}</h3>
        <p className="feature-description">
          {feature?.description || feature?.content}
        </p>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default NewsSection;
