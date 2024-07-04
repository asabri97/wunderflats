// src/components/Listing.js
import React from "react";
import "./Listing.css";

function Listing({ listing }) {
  const { title, price, image } = listing;

  return (
    <div className="listing">
      <div className="image-container">
        <img src={image} alt={title.en} />
      </div>
      <div className="listing-details">
        <h2>{title.en}</h2>
        <p className="price">
          <span className="price-value">
            €{(price / 100).toLocaleString("en-US")}
          </span>{" "}
          <span className="price-duration">per month</span>
        </p>
      </div>
    </div>
  );
}

export default Listing;
