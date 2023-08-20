import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { ContactContext } from "../context/Contact.context";

const ContactDetails = () => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const [contact, setContact] = useState({});

  const params = useParams();
  const { id } = params;
  const foundContact = contacts.find((contact) => contact.id == id);
  useEffect(() => {
    if (id && foundContact) {
      setContact(foundContact);
    }
  }, [id]);

  const {
    firstName,
    lastName,
    email,
    profession,
    image,
    gender,
    dateOfBirth,
    bio,
  } = contact;

  const navigate = useNavigate();
  const handleDelete = () => {
    toast.success("Contact is deleted successfully");
    deleteContact(id);
    navigate("/contacts");
  };

  const card = (
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
            <Card.Link as={Link} to={`/edit-contact/${id}`}>
              <Button variant="warning" type="view" className="ps-3">
                <FaPencil />
              </Button>
            </Card.Link>
            <Card.Link>
              <Button
                variant="danger"
                className="ps-3 ms-3"
                onClick={() => handleDelete(id)}
              >
                <FaTrashCan />
              </Button>
            </Card.Link>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
  return (
    <>
      <h2 className="text-center">Contact Details</h2>
      {Object.keys(contact).length === 0 ? <p>No Contact to show</p> : card}
    </>
  );
};

export default ContactDetails;
