import React from "react";
import Container from "react-bootstrap/Container";
import "./CatalogItemStyles.css";
import { Link } from "react-router-dom";

export const CatalogItem = ({ model, img, description, _id }) => {
  return (
    <>
      <Container className="item-container">
        <div className="item-content">
          <img src={img} className="item-image" />
          <div className="item-text">
            <div className="item-title">Model: {model}</div>
            <div className="item-description">Description: {description}</div>
          </div>
          <Link to={`/catalog/${_id}`} className="details-button">
            Details
          </Link>
        </div>
      </Container>
    </>
  );
};
