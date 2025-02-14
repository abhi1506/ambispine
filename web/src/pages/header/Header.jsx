import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/AmbiSpine_logo.png";
import { AiFillAndroid } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { DiDigitalOcean } from "react-icons/di";
import { FaBusinessTime, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";

import "./mobile.css";

const Header = ({ isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenProduct, setIsDropdownOpenProduct] = useState(false);

  const [mobileView, setMobileView] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const mobileMenuRef = useRef(null);

  const handleMobileView = () => {
    setMobileView(!mobileView);
  };

  const closeMobileView = () => {
    setMobileView(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileView();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const servicesdrop = [
    {
      id: 1,
      icon: <AiFillAndroid />,
      name: "Mobile App Development",
      feature: [
        { name: "IOS App Development" },
        { name: "Android App Development" },
        { name: "Hybrid App Development" },
      ],
    },
    {
      id: 2,
      icon: <CgWebsite />,
      name: "Website Development",
      feature: [
        { name: "Content Management System" },
        { name: "Software Development Services" },
      ],
    },
    {
      id: 3,
      icon: <FaBusinessTime />,
      name: "Business Solution",
      feature: [
        { name: "CRM Business Solution" },
        { name: "ERP Business Solution" },
      ],
    },

    {
      id: 4,
      icon: <DiDigitalOcean />,
      name: "Digital Marketing Services",
      feature: [{ name: "SEO Service" }, { name: "Content Writing Service" }],
    },
    {
      id: 5,
      icon: <IoIosCloudUpload />,
      name: "Cloud Solution",
      feature: [
        { name: "Cloud Solution and Data Migration" },
        { name: "Cloud Infastructure" },
        { name: "Edge Computing" },
      ],
    },
  ];
  const productLink = [
    {
      id: 1,
      name: "Spreads",
    },
    {
      id: 2,
      name: "Web Solution",
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="header__logos">
          <img src={logo} alt="AmbiSpine Logo" className="header__logos-img" />
        </Link>
        <nav className={`nav-menu ${mobileView ? "showMobileHeader" : ""} `}>
          <Link to="/" className="nav-link">
            Home
          </Link>

          
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="#" className="nav-link">
              Service{" "}
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </Link>
          </div>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            style={{ background: "#fff" }}
            className={`dropdown-header-mega-services ${
              isDropdownOpen ? "productshow" : ""
            }`}
          >
            <div className="header-mega-services-left">
              <h3 className="services-dropdwon-heading">AmbiSpine Solution</h3>
              <p className="service-dropdwon-subtitle">
                Join us to discover the latest advancements in cloud. Computing
                artificial intelligence, and data analytics and be part of the
                transformation
              </p>
              <div className="dropdwon-product-explore-header">
              <Link
                to="/services/explore-technologies"
                className="dropdwon-product-explore"
                data-aos="fade-up"
              >
                Explore Technologies
                <FaArrowRightLong className="" />
              </Link>
              </div>
            </div>
            <div className="service-drop-right-container">
              <div className="dropdown-grid">
                {servicesdrop.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="service-card-drop"
                  >
                    {/* <span className="service-icon">{service.icon}</span> */}
                    <div className="service-content">
                      <h3 className="service-title">{service.name}</h3>
                      <hr />
                      <div className="feature-tags">
                        {service.feature.map((feature, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${feature.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="feature-tag"
                          >
                            {feature.name}{" "}
                            <FaArrowRightLong className="service_header_arrow" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setIsDropdownOpenProduct(true)}
            onMouseLeave={() => setIsDropdownOpenProduct(false)}
          >
            <Link to="#" className="nav-link">
              Product{" "}
              <span
                className={`dropdown-arrow ${
                  isDropdownOpenProduct ? "open" : ""
                }`}
              >
                ▼
              </span>
            </Link>
          </div>
          <div
            onMouseEnter={() => setIsDropdownOpenProduct(true)}
            onMouseLeave={() => setIsDropdownOpenProduct(false)}
            style={{ background: "#fff" }}
            className={`dropdown-mega-product ${
              isDropdownOpenProduct ? "productshow" : ""
            }`}
          >
            <div className="service-solution-des">
              <h3 className="product-dropdwon-heading">AmbiSpine Solution</h3>
              <p className="product-dropdwon-subtitle">
                Join us to discover the latest advancements in cloud. Computing
                artificial intelligence, and data analytics and be part of the
                transformation
              </p>
              <div className="dropdwon-product-explore-header">
              <Link
                to="/services/explore-technologies"
                className="dropdwon-product-explore"
                data-aos="fade-up"
              >
                Explore Technologies
                <FaArrowRightLong className="" />
              </Link>
              </div>
            </div>
            <div className="product-left-container">
              {productLink.map((data) => {
                return (
                  <div key={data.id} className="my-2">
                    <Link
                      className="product-drop-link"
                      to={`product/${data.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {data.name}{" "}
                      <FaArrowRightLong className="product-lnk-icon" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/career" className="nav-link">
            Career
          </Link>
          <Link
            to="/contact"
            className="contact-btn"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </nav>

        <IoReorderThreeOutline
          onClick={handleMobileView}
          className="mobile-toggle "
        />
        {mobileView && (
          <div
            ref={mobileMenuRef}
            data-aos="fade-left"
            className="mobile-view-section"
          >
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/" className="header__logos">
                <img
                  src={logo}
                  alt="AmbiSpine Logo"
                  className="header__logos-img"
                />
              </Link>
              <RxCross2 className="cross-icon" onClick={handleMobileView} />
            </div>
            <nav>
              <Link to="/" className="mobile-view-link">
                Home
              </Link>
              <div className="services-section">
                <div className="mobile-view-link">Services</div>
                {servicesdrop.map((service) => (
                  <div key={service.id} className="service-item">
                    <div
                      className="service-header"
                      onClick={() => toggleService(service.id)}
                    >
                      {service.icon} {service.name}
                      <FaArrowRightLong
                        className={`service-arrow ${
                          expandedService === service.id ? "rotated" : ""
                        }`}
                      />
                    </div>
                    {expandedService === service.id && (
                      <div className="service-features-mobile-view">
                        {service.feature.map((feature, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${feature.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="feature-tag-mobile-view"
                          >
                            {feature.name}
                            <FaArrowRightLong className="feature-tag-icon" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/product" className="mobile-view-link">
                Product
              </Link>
              <Link to="/aboutus" className="mobile-view-link">
                About Us
              </Link>
              <Link to="/career" className="mobile-view-link">
                Career
              </Link>
              <Link to="/contact" className="mobile-view-link">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
