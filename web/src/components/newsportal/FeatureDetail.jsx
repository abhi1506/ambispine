import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../../data/newsMockData";
import "./featuredetail.css";
 
import { fetchNewsById } from "../../redux/admin/newsSlice/newsSlice";
import { useDispatch, useSelector } from "react-redux";
const FeatureDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedNews, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    // Dispatch the thunk to fetch the news post by id
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);
console.log(id)
   
const feature =
selectedNews || newsData.features.find((f) => f.id === parseInt(id));

if (loading) {
return <div className="loading-message">Loading news post...</div>;
}

if (error) {
return <div className="error-message">Error: {error}</div>;
}

if (!feature) {
return <div className="error-message">Feature not found.</div>;
}
  return (
    <div className="feature-detail-container">
      <Link to="/news" className="back-button">
        ← Back to News
      </Link>

      <div className="feature-detail-content">
        <div className="feature-detail-header">
          <h1 className="feature-detail-title">{feature.title}</h1>
          <p className="feature-detail-description">{feature.description || feature.content}</p>
        </div>

        <div className="feature-detail-image">
          <img src={feature.imageUrl || feature.images[0]?.url} alt={feature.title} />
        </div>

        {/* <div
          className="feature-detail-body"
          dangerouslySetInnerHTML={{ __html: feature.fullContent }}
        /> */}

 <div
  className="feature-detail-body"
  dangerouslySetInnerHTML={{
    __html: feature.fullContent?.[0]?.split(",").join("<br/>") || "",
  }}
/>
      </div>
    </div>
  );
};

export default FeatureDetail;
