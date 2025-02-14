import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Feedback from "./Feedbacks";
import contact1 from "../../images/home.jpg";
import "./Contact.css";
import OurTeam from "../About/OurTeamComponent";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import ContactForm from "./ContactForm";
import FooterComponent from "../footer/FooterComponents";
import LandingSection from "./LandingSection";
import ServicesSupport from "./ServiceSupport";
import CompanyLocations from "./CompanyLocations";
import { FaArrowRightLong, FaArrowLeftLong, FaTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
const TeamMember = ({ name, role, avatar, socialMedia }) => (
  <div className="team-card">
    <div className="profile-image-container">
      <img
        src={avatar?.url || "/api/placeholder/400/400"}
        alt={`${name}'s profile`}
      />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          {socialMedia.instagram && (
            <a href={socialMedia.instagram}>
              <BiLogoInstagram />
            </a>
          )}
          {socialMedia.facebook && (
            <a href={socialMedia.facebook}>
              <LiaFacebook />
            </a>
          )}
          {socialMedia.twitter && (
            <a href={socialMedia.twitter}>
              <TiSocialTwitterCircular />
            </a>
          )}
          {socialMedia.linkedin && (
            <a href={socialMedia.linkedin}>
              <TiSocialLinkedinCircular />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function Contact() {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  return (
    <div className="contact-1">
      {/* <header className="contact-header-1">
        <div className="contact-header-content">
          <h1>Transforming the Future, Together</h1>
          <p>
            Tap into our solutions to empower clients globally to forge a more
            resilient, secure, and sustainable path forward. Contact us for
            better solutions.
          </p>
          <h2>We'd Love to Hear from You</h2>
        </div>
        <div className="contact-header-image">
          <img src={contact1} alt="Contact" className="contact-image" />
        </div>
      </header> */}

      {/* <section className="contact-services">
        <h2>Connect For Services And Support</h2>
        <div className="contact-buttons">
          <a href="#contactus1" className="connect">
            Connect With Us
          </a>

          <button
            className="feed"
            onClick={() =>
              document.getElementById("feedback-modal").showModal()
            }
          >
            Feedback
          </button>
          <a
            href="mailto:ambispinetechnologies@gmail.com"
            className="mail-button"
          >
            Mail for queries
          </a>

          <a href="#office" className="office1">
            Offices
          </a>
        </div>
      </section> */}
      <LandingSection />
      <ServicesSupport />
      <section id="contactus1">
        <ContactForm />
      </section>
      <CompanyLocations />

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers
            .filter((member) => !member.leader)
            .map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
        </div>
      </section>

      <FooterComponent />

      {/* <dialog id="feedback-modal">
        <Feedback />
      </dialog> */}
      <dialog id="feedback-modal" className="feedback-modal">
        <Feedback
          onClose={() => document.getElementById("feedback-modal").close()}
        />
      </dialog>
    </div>
  );
}
