// import React from "react";
// import "./CompanyLocations.css";

// const CompanyLocations = () => {
//   return (
//     <div className="locations-container">
//       <div className="locations-content">
//         <h1>Locations</h1>
//         <p>
//           Explore our service offerings and subsidiaries in specific geography
//         </p>
//       </div>
//       <div className="locations-grid">
//         <div className="location-box satna-location">
//           <h3>Satna Location</h3>
//           <p>123 Industrial Park, Satna, Madhya Pradesh</p>
//           <p>Contact: +91-1234-567890</p>
//         </div>
//         <div className="location-box rewa-location">
//           <h3>Rewa Locations</h3>
//           <p>456 Tech Zone, Rewa, Madhya Pradesh</p>
//           <p>Contact: +91-9876-543210</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyLocations;

import React, { useState } from "react";
import "./CompanyLocations.css";

const CompanyLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 24.578,
    lng: 80.8321,
    name: "Satna Location",
  });

  const locations = [
    {
      name: "Satna Location",
      lat: 24.578,
      lng: 80.8321,
      address: "123 Industrial Park, Satna, Madhya Pradesh",
      contact: "+91-1234-567890",
    },
    {
      name: "Rewa Location",
      lat: 24.5321,
      lng: 81.2981,
      address: "456 Tech Zone, Rewa, Madhya Pradesh",
      contact: "+91-9876-543210",
    },
  ];

  return (
    <div className="locations-map-container">
      <div className="locations-sidebar">
        <h1>Locations</h1>
        <p>Explore our service offerings across strategic geographies</p>

        <div className="location-list">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`location-item ${
                selectedLocation.name === location.name ? "active" : ""
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <span>{location.contact}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="map-container">
        <iframe
          src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=15&output=embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Company Location"
        />
      </div>
    </div>
  );
};

export default CompanyLocations;
