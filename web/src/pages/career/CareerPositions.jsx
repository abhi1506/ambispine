import React, { useEffect } from "react";
import {
  BsClock,
  BsGeoAlt,
  BsCurrencyBitcoin,
  BsArrowUpRight,
} from "react-icons/bs";
import "./Career.css";
import {fetchCareers} from "../../redux/admin/slice/careerAdminSlice"
import { useDispatch, useSelector } from "react-redux";

export default function CareerPositions({ onApply }) {
  const dispatch = useDispatch();
    const { careers, loading, error } = useSelector((state) => state.careerAdmin);
    useEffect(() => {
      dispatch(fetchCareers());
  }, [dispatch]);


  return (
    <div className="positions-section" id="positions">
      <h2>Open Positions</h2>
      <div className="positions-grid">
        {careers?.data?.map((position, index) => (
          <div key={index} className="position-card">
            <div className="position-header">
              <h3>{position.jobTitle}</h3>
              <p>{position.jobDescription}</p>
            </div>
            <div className="position-details">
              <span>
                <BsClock /> {position.employmentType}
              </span>
              <span>
                <BsGeoAlt /> {position.location}
              </span>
              <span>
                <BsCurrencyBitcoin /> {position.salaryRange}
              </span>
            </div>
            <button className="apply-button" onClick={() => onApply(position?._id)}>
              Apply <BsArrowUpRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
