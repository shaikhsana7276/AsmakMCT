
import React from "react";

const MapSection = () => {
  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <hr style={{ marginBottom: "20px" }} />
      <h2 style={{ marginBottom: "10px" }}>Contact Information</h2>
      <p style={{ marginBottom: "8px" }}>
        <strong>Mobile:</strong> +968 92850600
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Tel:</strong> +968 24050604
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Address:</strong> P.O.BOX 1741, POSTAL CODE 122, AL MABELA,
        SULTANATE OF OMAN, C.R.NO 1341511
      </p>
      <p style={{ marginBottom: "20px" }}>
        <strong>Email:</strong> info@asmkmct.com
      </p>
      <h3 style={{ marginBottom: "10px" }}>Our Location</h3>
      {/* Embed Google Maps using iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.8348536733015!2d58.20521437703546!3d23.630806323965952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3d980d34189%3A0x7b3adde6aae03e63!2sAsmak%20Muscat%20Int&#39;l%20LLC%20Fish%20Exporter!5e1!3m2!1sen!2sin!4v1735207104549!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{
          border: 0,
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
