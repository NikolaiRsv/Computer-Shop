import { Link, useNavigate, useParams } from "react-router-dom";
import { useComputerContext } from "../../contexts/ComputerContext.js";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/authContext.js";
import { requestFactory } from "../../services/requests.js";
import "./DetailsStyles.css";

export const Details = () => {
  const { computerId } = useParams();
  const { userId, isAuthenticated } = useAuthContext();
  const { getComputer, deleteComputer } = useComputerContext();

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const computer = getComputer(computerId);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteComputer(computer._id);
    navigate("/catalog");
  };
  const isOwner = computer._ownerId === userId;

  return (
    <div className="div-details">
      <Container className="details-container">
        <Card className="details-card">
          <Row className="details-row">
            <Col md={5} className="details-image-container">
              <Image src={computer.img} className="details-image" />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title className="details-model">
                  {computer.model}
                </Card.Title>
                <Card.Text>
                  <span className="details-storage">
                    Storage:
                    <span className="details-value">{computer.storage}</span>
                  </span>
                  <span className="details-cpu">
                    CPU:
                    <span className="details-value">{computer.cpu}</span>
                  </span>
                  <span className="details-gpu">
                    GPU:
                    <span className="details-value">{computer.gpu}</span>
                  </span>
                  <span className="details-description">
                    Description: {computer.description}
                  </span>
                </Card.Text>

                {isOwner && (
                  <div className="details-buttons-container">
                    <Link
                      to={`/catalog/${computer._id}/edit`}
                      className="details-edit-button"
                    >
                      Edit
                    </Link>
                    <Button
                      className="details-delete-button"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};
