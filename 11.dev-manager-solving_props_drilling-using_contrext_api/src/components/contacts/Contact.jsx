import React, { useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaEye, FaTrashCan } from "react-icons/fa6";
import { format } from "date-fns";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ContactContext } from "../../context/Contact.context";

const Contact = ({ contact }) => {
  const context = useContext(ContactContext);
  const { deleteContact } = context;
  const {
    firstName,
    lastName,
    email,
    gender,
    image,
    dateOfBirth,
    profession,
    bio,
    id,
  } = contact;

  const handleDelete = () => {
    toast.success("Contact is deleted successfully");
    deleteContact(id);
  };
  return (
    <>
      <Card className="mb-2">
        <div className="d-flex ps-2">
          <Card.Img variant="top" src={image} className="card-image" />
          <Card.Body>
            <div className="ps-3">
              <Card.Title>
                {firstName} {lastName}
              </Card.Title>
              <Card.Subtitle className="text-muted">
                Profession:{profession}
              </Card.Subtitle>
              <Card.Text>Bio:{bio}</Card.Text>
            </div>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Email : {email}</ListGroup.Item>
              <ListGroup.Item>Gender:{gender} </ListGroup.Item>
              <ListGroup.Item>
                Date of Birth :
                {dateOfBirth instanceof Object
                  ? format(dateOfBirth, "dd/MM/yyyy")
                  : dateOfBirth}{" "}
              </ListGroup.Item>
            </ListGroup>

            <div className="ps-3 mt-3">
              <Card.Link as={Link} to={`/contacts/${id}`}>
                <Button variant="warning" type="view" className="ps-3">
                  <FaEye />
                </Button>
              </Card.Link>
              <Card.Link>
                <Button
                  variant="danger"
                  className="ps-3 ms-3"
                  onClick={handleDelete}
                >
                  <FaTrashCan />
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default Contact;
