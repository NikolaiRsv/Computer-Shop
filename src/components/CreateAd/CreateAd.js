import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./CreateAdStyles.css";

import { useForm } from "../../hooks/useForms.js";
import { useComputerContext } from "../../contexts/ComputerContext.js";

const CreateAd = () => {
  const { onCreateComputerSubmit } = useComputerContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      model: "",
      storage: "",
      cpu: "",
      gpu: "",
      img: "",
      description: "",
    },
    onCreateComputerSubmit
  );

  return (
    <div className="background-ad">
      <Container className="container-ad">
        <h1>Create Ad</h1>
        <Form className="form-ad" method="post" onSubmit={onSubmit}>
          <Form.Group controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              value={values.model}
              onChange={changeHandler}
              type="text"
              name="model"
              placeholder="Enter computer model"
            />
          </Form.Group>
          <Form.Group controlId="storage">
            <Form.Label>Storage</Form.Label>
            <Form.Control
              value={values.storage}
              onChange={changeHandler}
              type="text"
              name="storage"
              placeholder="Enter storage"
            />
          </Form.Group>
          <Form.Group controlId="cpu">
            <Form.Label>CPU</Form.Label>
            <Form.Control
              value={values.cpu}
              onChange={changeHandler}
              type="text"
              name="cpu"
              placeholder="Enter CPU"
            />
          </Form.Group>
          <Form.Group controlId="gpu">
            <Form.Label>GPU</Form.Label>
            <Form.Control
              value={values.gpu}
              onChange={changeHandler}
              type="text"
              name="gpu"
              placeholder="Enter GPU"
            />
          </Form.Group>
          <Form.Group controlId="img">
            <Form.Label>IMG</Form.Label>
            <Form.Control
              value={values.img}
              onChange={changeHandler}
              type="text"
              name="img"
              placeholder="Upload a photo"
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={values.description}
              onChange={changeHandler}
              name="description"
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

export default CreateAd;
