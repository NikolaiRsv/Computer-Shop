import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./CreateAdStyles.css";

const CreatePost = () => {
  return (
    <div className="background-ad">
    <Container className="container-ad">
      <h1>Create Ad</h1>
      <Form className="form-ad">
        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" placeholder="Enter model" />
        </Form.Group>
        <Form.Group controlId="storage">
          <Form.Label>Storage</Form.Label>
          <Form.Control type="text" placeholder="Enter storage" />
        </Form.Group>
        <Form.Group controlId="cpu">
          <Form.Label>CPU</Form.Label>
          <Form.Control type="text" placeholder="Enter CPU" />
        </Form.Group>
        <Form.Group controlId="gpu">
          <Form.Label>GPU</Form.Label>
          <Form.Control type="text" placeholder="Enter GPU" />
        </Form.Group>
        <Form.Group controlId="img">
          <Form.Label>IMG</Form.Label>
          <Form.Control type="text" placeholder="Upload a photo" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter description"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="button-ad">
          Create
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default CreatePost;
