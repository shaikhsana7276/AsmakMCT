import React from "react";

import AboutUsimg1 from "../assets/images/AboutUsimg1.jpg";
import AboutUsimg2 from "../assets/images/AboutUsimg2.jpg";
import AboutUsimg3 from "../assets/images/AboutUsimg3.png";
import AboutUsimg4 from "../assets/images/AboutUsimg4.png";

const AboutUs = () => {
  return (
    <>
      <style>
        {`
          /* Main container */
          div {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }

        
          h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-align: center;
            color: #333;
          }

        
          p {
            font-size: 1rem;
            color: #555;
            margin-bottom: 20px;
            text-align: justify;
          }

        
          img {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 10px auto;
            display: block;
          }
        `}
      </style>
      <div>
        <h1>Asmak Muscat Int'l LLC</h1>
        <p>
          Established in 2018, Asmak Muscat Int'l LLC is led by a founder with
          over 22 years of experience in the seafood industry. Operating from
          the pristine waters of Oman in the Indian Ocean (FAO51), we specialize
          in sourcing high-quality seafood products while maintaining
          sustainable and eco-friendly practices. Our commitment extends beyond
          sourcing premium quality fish. We aim to develop long-term
          relationships with our clients across Oman, UAE, Qatar, Bahrain, Iraq,
          Egypt, India, Bangladesh, Thailand, Malaysia, Ghana, Benin, Togo,
          Cote d'Ivory, Senegal, Mozambique, Haiti, Cameroon, Guinea, Congo,
          Liberia, South Africa, and numerous other countries by supplying
          high-quality products tailored to their needs. With a wide range of
          seafood, including pelagic fish, we cater to global demands while
          ensuring our products meet the highest quality standards.
        </p>
      </div>
      <img src={AboutUsimg1} alt="Image 1" />
      <img src={AboutUsimg2} alt="Image 2" />
      <img src={AboutUsimg3} alt="Image 3" />
      <img src={AboutUsimg4} alt="Image 4" />
    </>
  );
};

export default AboutUs;
