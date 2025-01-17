
import React from "react";
import "../assets/styles/ContactUs.css"; // Import CSS for styling
import omanFlag from "../assets/images/GlobalPartnerImg1.jpg"; // Ensure the flag image is in the project folder

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Get in touch with us Today</p>
        <p>
          <strong>Mobile:</strong> +968 92850600
        </p>
        <p>
          <strong>Tel:</strong> +968 24050604
        </p>
        <p>
          <strong>Address:</strong> P.O.BOX 1741, POSTAL CODE 122, AL MABELA,
          SULTANATE OF OMAN, C.R.NO 1341511
        </p>
        <p>
          <strong>Email:</strong> info@asmakmct.com
        </p>
      </div>
      <div className="flag-container">
        <img src={omanFlag} alt="Oman Flag" className="oman-flag" />
      </div>
    </div>
  );
};

export default ContactUs;
