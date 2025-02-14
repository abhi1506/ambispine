import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewsRoom.css";
import Pagination from "./Pagination";
import mockPaginationData from "../../data/mockPagination";

const NewsRoom = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNewsData(currentPage);
  }, [currentPage]);

  const fetchNewsData = async (page) => {
    setIsLoading(true);
    try {
      const response = await mockPaginationData(page);
      setNewsItems(response.items);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="news-room">
      <div className="news-room-container">
        <h1 className="news-room-title">Relode New Room</h1>
        <div className="news-room-underline"></div>

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="news-grid">
            {newsItems.map((item) => (
              <Link to={`/news/${item.id}`} key={item.id} className="news-card">
                <div className="news-image-container">
                  <img
                    src={item.imageUrl}
                    alt={item.heading}
                    className="news-image"
                  />
                  <div className="news-overlay">
                    <span className="read-more">Read More</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3 className="news-heading">{item.heading}</h3>
                  <p className="news-subtitle">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default NewsRoom;
