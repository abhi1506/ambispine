import React, { useState, useEffect, useRef } from "react";
import { Upload, AlertCircle } from "lucide-react";
import "./JobApplicationForm.css";
import { useDispatch, useSelector } from "react-redux";
import { applyJob, clearJobState } from "../../redux/slices/applyJobSlice";
import { toast } from "react-toastify";

const JobApplicationForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.applyJob);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    experience: "",
    position: "",
    securityCode: "62345",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        experience: "",
        position: "",
        securityCode: "62345",
        resume: null,
      });
      dispatch(clearJobState());
    }

    if (error) {
      toast.error(error || "Something went wrong while applying.");
    }
  }, [success, error, dispatch]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Invalid phone number (10 digits required)";
    }
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => {
        console.log("Updated FormData:", { ...prev, resume: file });
        return { ...prev, resume: file };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const jobData = new FormData();
      jobData.append("firstName", formData.firstName);
      jobData.append("lastName", formData.lastName);
      jobData.append("email", formData.email);
      jobData.append("contact", formData.contact);
      jobData.append("experience", formData.experience);
      jobData.append("position", formData.position);
      jobData.append("securityCode", formData.securityCode);
  
      // Ensure resume is appended correctly
      if (formData.resume) {
        jobData.append("resume", formData.resume);
      }
  
      // Debugging - Log FormData values
      for (let [key, value] of jobData.entries()) {
        console.log(`${key}:`, value);
      }
  
      dispatch(applyJob(jobData))
        .then((response) => {
          // console.log("API Response:", response);
          toast.success("submitted..!");
        
        })
        .catch((error) => {
          console.error("API Error:", error);
          toast.error(error?.response?.data?.message || "Failed to submit job application. Please try again.");
        });
    }
  };
  


  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      experience: "",
      position: "",
      securityCode: "62345",
      resume: null,
    });
    setErrors({});
  };


  return (
    <div className="form-container-extra">
      <div className="form-header-extra">
        <h1>Fill the Form</h1>
        <p>
          At Ambispine Technologies Inc., we are having a lot of exciting IT
          career opportunities in various relevant sectors.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-grid">
          {["firstName", "lastName", "email", "contact", "experience", "position"].map((field) => (
            <div key={field} className="form-field-extra">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                className={errors[field] ? "error" : ""}
              />
              {errors[field] && (
                <span className="error-message">
                  <AlertCircle size={16} /> {errors[field]}
                </span>
              )}
            </div>
          ))}

          <div className="form-field-extra">
            <input
              type="text"
              value={formData.securityCode}
              readOnly
              className="security-code"
            />
            <label>Security Code</label>
          </div>

          <div className="form-field-extra">
            <div className="file-upload">
            <input
  type="file"
  id="resume"
  ref={fileInputRef}
  onChange={handleFileChange}
  accept=".pdf,.doc,.docx"
/>
<label htmlFor="resume" className="file-label">
  <Upload size={20} />
  {formData.resume ? formData.resume.name : "Choose Resume/CV"}
</label>

              {errors.resume && (
                <span className="error-message">
                  <AlertCircle size={16} /> {errors.resume}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-actions-extra">
          <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
