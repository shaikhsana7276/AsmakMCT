
import React from "react";
import ProductImg1 from "../assets/images/ProductImg1.jpg";
import ProductImg2 from "../assets/images/ProductImg2.jpg";
import ProductImg3 from "../assets/images/ProductImg3.jpg";
import ProductImg4 from "../assets/images/ProductImg4.jpg";
import ProductImg5 from "../assets/images/ProductImg5.jpg";
import ProductImg6 from "../assets/images/ProductImg6.jpg";

const Product = () => {
  // Array of objects to store image details with fish names
  const products = [
    { id: 1, name: "Salmon", image: ProductImg1 },
    { id: 2, name: "Tuna", image: ProductImg2 },
    { id: 3, name: "Mackerel", image: ProductImg3 },
    { id: 4, name: "Sardine", image: ProductImg4 },
    { id: 5, name: "Cod", image: ProductImg5 },
    { id: 6, name: "Snapper", image: ProductImg6 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#6295C8", marginBottom: "30px" }}>
        Discover Our Products
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              width: "300px", // Card width for larger display
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%", // Adapts to card width
                height: "200px", // Fixed height for uniform image size
                objectFit: "cover", // Maintains aspect ratio
                borderRadius: "8px",
              }}
            />
            <h3 style={{ fontSize: "18px", color: "#333", marginTop: "10px" }}>
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
