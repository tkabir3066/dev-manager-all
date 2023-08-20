import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    image: "",
    gender: "male",
    dateOfBirth: new Date(),
    bio: "",
  });
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation

    //form submission
    addContact(contact);
  };
  return (
    <>
      <h2 className="text-center">Add Contact</h2>

      <Form onSubmit={handleSubmit}>
        {/* firstName */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="firstName" column>
              First Name
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              placeholder="Enter Your First Name"
            />
          </Col>
        </Form.Group>

        {/* lastName */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="lastName" column>
              Last Name
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              placeholder="Enter Your Last Name"
            />
          </Col>
        </Form.Group>

        {/* Email */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="email" column>
              Email
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </Col>
        </Form.Group>

        {/* Profession */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              name="profession"
              id="profession"
              onChange={handleChange}
              placeholder="Enter Your Profession"
            />
          </Col>
        </Form.Group>

        {/* image */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="image" column>
              Image
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              placeholder="Enter Your Profile Picture Url"
            />
          </Col>
        </Form.Group>

        {/* Gender*/}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="image" column>
              Gender
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              id="gender"
              value="male"
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              id="gender"
              value="female"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* Date of Birth */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="dateOfBirth" column>
              Date of Birth
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* Bio */}
        <Form.Group as={Row} className="mb-3">
          <Col sm="3">
            <Form.Label htmlFor="bio" column>
              Bio
            </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              as="textarea"
              type="text"
              name="bio"
              id="bio"
              onChange={handleChange}
              placeholder="Enter Your Profile Picture Url"
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </>
  );
}

export default AddContact;
