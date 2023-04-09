import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "../../../hooks/useForms.js";
import { useComputerContext } from "../../../contexts/ComputerContext.js";

import { computerServiceFactory } from "../../../services/computerService.js";
import { useParams } from "react-router-dom";
import { useService } from "../../../hooks/useService.js";

const EditAd = () => {
  const { onComputerEditSubmit } = useComputerContext();
  const { computerId } = useParams();
  const computerService = useService(computerServiceFactory);

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      model: "",
      storage: "",
      cpu: "",
      gpu: "",
      img: "",
      description: "",
    },
    onComputerEditSubmit
  );

  useEffect(() => {
    computerService.getOne(computerId).then((result) => {
      changeValues(result);
    });
  }, [computerId]);

  return (
    <div className="background-ad">
      <Container className="container-ad">
        <h1>Edit Ad</h1>
        <Form className="form-ad" method="post" onSubmit={onSubmit}>
          <Form.Group controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              value={values.model}
              onChange={changeHandler}
              type="text"
              name="model"
            />
          </Form.Group>
          <Form.Group controlId="storage">
            <Form.Label>Storage</Form.Label>
            <Form.Control
              value={values.storage}
              onChange={changeHandler}
              type="text"
              name="storage"
            />
          </Form.Group>
          <Form.Group controlId="cpu">
            <Form.Label>CPU</Form.Label>
            <Form.Control
              value={values.cpu}
              onChange={changeHandler}
              type="text"
              name="cpu"
            />
          </Form.Group>
          <Form.Group controlId="gpu">
            <Form.Label>GPU</Form.Label>
            <Form.Control
              value={values.gpu}
              onChange={changeHandler}
              type="text"
              name="gpu"
            />
          </Form.Group>
          <Form.Group controlId="img">
            <Form.Label>IMG</Form.Label>
            <Form.Control
              value={values.img}
              onChange={changeHandler}
              type="text"
              name="img"
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
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="button-ad">
            Edit Ad
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditAd;
