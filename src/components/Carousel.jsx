
import React from "react";
import caro1 from "../assets/images/Caro1.jpg";
import caro2 from "../assets/images/Caro2.jpg";
import caro3 from "../assets/images/Caro3.jpg";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{
          height: "600px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active">
            <img
              className="d-block w-100 h-100"
              src={caro2}
              alt="Image showcasing feature one"
              style={{
                objectFit: "cover",
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-100"
              src={caro2}
              alt="Image showcasing feature two"
              style={{
                objectFit: "cover",
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-100"
              src={caro3}
              alt="Image showcasing feature three"
              style={{
                objectFit: "cover",
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Inline media query for responsiveness on mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            #carouselExampleSlidesOnly {
              height: 400px !important; /* Adjust carousel height for smaller screens */
            }
            .carousel-inner {
              height: 100% !important; /* Ensure inner container is full height */
            }
            .carousel-item img {
              object-fit: cover !important; /* Ensure images cover the area */
              height: 100% !important; /* Make images fill the height */
            }
          }
        `}
      </style>
    </>
  );
};

export default Carousel;
