import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./CatalogStyles.css";

export const CatalogItem = ({ title, image, description, onClick }) => {
  return (
    <>
      <Container className="item-container">
        <div className="item-content">
          <img
            src={
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650cv12d.jpg;maxHeight=120;maxWidth=120"
            }
            alt={title}
            className="box-image"
          />
          <div className="box-text">
            <div className="box-title">{"Hello"}</div>
            <div className="box-description">{"someDesc"}</div>
          </div>
          <Button className="box-button" onClick={onClick}>
            Details
          </Button>
        </div>
      </Container>
      <Container className="item-container">
        <div className="item-content">
          <img
            src={
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450866_sd.jpg;maxHeight=140;maxWidth=140"
            }
            alt={title}
            className="box-image"
          />
          <div className="box-text">
            <div className="box-title">Model: {"Macbook Air"}</div>
            <div className="box-description">Description: {"someDesc"}</div>
          </div>
          <Button className="box-button" onClick={onClick}>
            Details
          </Button>
        </div>
      </Container>
    </>
  );
};
