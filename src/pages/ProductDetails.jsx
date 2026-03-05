import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: "40px" }}>Product not found</div>;
  }

  /* SUPPORT SINGLE OR MULTIPLE IMAGES */
  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-details-container">

      {/* IMAGE SECTION */}
      <div className="product-images">

        <div className="thumbnail-list">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>

      </div>

      {/* PRODUCT INFO */}
      <div className="product-info">

        <h1>{product.name}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐ {product.rating}
        </div>

        <h2>
          ₹{product.price} / {product.weight}
        </h2>

        <h3>Ingredients</h3>

        <ul>
          {product.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
};

export default ProductDetails;