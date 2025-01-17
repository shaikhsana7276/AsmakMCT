import React from "react";
import HeroImg from "../assets/images/HeroImg.png";
import GlobalPartnerImg1 from "../assets/images/GlobalPartnerImg1.jpg";
import GlobalPartnerImg2 from "../assets/images/GlobalPartnerImg2.jpg";
import GlobalPartnerImg3 from "../assets/images/GlobalPartnerImg3.jpg";
import GlobalPartnerImg4 from "../assets/images/GlobalPartnerImg4.jpg";
import GlobalPartnerImg5 from "../assets/images/GlobalPartnerImg5.jpg";
import GlobalPartnerImg6 from "../assets/images/GlobalPartnerImg6.jpg";
import GlobalPartnerImg7 from "../assets/images/GlobalPartnerImg7.jpg";
import GlobalPartnerImg8 from "../assets/images/GlobalPartnerImg8.jpg";
import GlobalPartnerImg9 from "../assets/images/GlobalPartnerImg9.jpg";
import GlobalPartnerImg10 from "../assets/images/GlobalPartnerImg10.jpg";
import GlobalPartnerImg11 from "../assets/images/GlobalPartnerImg11.jpg";
import GlobalPartnerImg12 from "../assets/images/GlobalPartnerImg12.jpg";
import GlobalPartnerImg13 from "../assets/images/GlobalPartnerImg13.jpg";
import GlobalPartnerImg14 from "../assets/images/GlobalPartnerImg14.webp";
import GlobalPartnerImg15 from "../assets/images/GlobalPartnerImg15.jpg";
import GlobalPartnerImg16 from "../assets/images/GlobalPartnerImg16.jpg";

const Herosection = () => {
  const flag = [
    { id: 1, img: GlobalPartnerImg1, title: "Oman" },
    { id: 2, img: GlobalPartnerImg2, title: "UAE" },
    { id: 3, img: GlobalPartnerImg3, title: "Qatar" },
    { id: 4, img: GlobalPartnerImg4, title: "Bahrain" },
    { id: 5, img: GlobalPartnerImg5, title: "Iraq" },
    { id: 6, img: GlobalPartnerImg6, title: "Egypt" },
    { id: 7, img: GlobalPartnerImg7, title: "India" },
    { id: 8, img: GlobalPartnerImg8, title: "Bangladesh" },
    { id: 9, img: GlobalPartnerImg9, title: "Thailand" },
    { id: 10, img: GlobalPartnerImg10, title: "Malaysia" },
    { id: 11, img: GlobalPartnerImg11, title: "Ghana" },
    { id: 12, img: GlobalPartnerImg12, title: "Benin" },
    { id: 13, img: GlobalPartnerImg13, title: "Togo" },
    { id: 14, img: GlobalPartnerImg14, title: "Cote d'Ivoire" },
    { id: 15, img: GlobalPartnerImg15, title: "Senegal" },
    { id: 16, img: GlobalPartnerImg16, title: "Mozambiq" }
  ];

  return (
    <>
      <img
        src={HeroImg}
        alt="the ship img"
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover",
        }}
      />

      {/* Our Global Partners section */}
      <div>
        <h1
          style={{
            textAlign: "center",    // Centers the heading
            color: "#6295C8",       // Applies the color
            marginBottom: "40px",   // Adds space below the heading
          }}
        >
          Our Global Partners
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {flag.map((partner) => (
            <div
              key={partner.id}
              style={{
                width: "150px",
                textAlign: "center",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={partner.img}
                alt={partner.title}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3>{partner.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Herosection;
