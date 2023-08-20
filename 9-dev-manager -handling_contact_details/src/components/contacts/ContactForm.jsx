import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "First Name should have minimum 3 character"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Last Name should have minimum 3 character"),
  email: yup
    .string()
    .email("Please Enter a Valid Email id")
    .required("Email Id is required"),
  profession: yup
    .string()
    .required("Profession is required")
    .oneOf(["developer", "designer", "marketer"]),
  image: yup
    .string()
    .required("Profile Picture is required")
    .url("Enter a valid Url"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "profession must be minimum 10 characters")
    .max(300, "Bio must be maximum 300 characters"),
});

function ContactForm({ addContact, contact, updateContact }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const defaultValue = {
    firstName: contact?.firstName || "Tutul",
    lastName: contact?.lastName || "Kabir",
    email: contact?.email || "tutulkabir@gmail.com",
    profession: contact?.profession || "developer",
    image: contact?.image || "https://randomuser.me/api/portraits/men/76.jpg",
    gender: contact?.gender || "male",
    dateOfBirth: contact?.dateOfBirth || new Date(),
    bio: contact?.bio || "All about you, Modify your data yourself",
  };

  const {
    firstName,
    lastName,
    email,
    profession,
    image,
    bio,
    gender,
    dateOfBirth,
  } = defaultValue;
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        image: "",
        bio: "",
      });
    }
  }, [isSubmitSuccessful]);
  useEffect(() => {
    setValue("dateOfBirth", startDate);
  }, [startDate]);

  const onSubmit = (data) => {
    const id = contact?.id;

    //adding contacts

    if (id) {
      //showing flash message
      toast.success("Contact is Updated Successfully");
      updateContact(data, id);
    } else {
      //showing flash message
      toast.success("Contact is Added Successfully");
      addContact(data);
    }

    navigate("/contacts");
  };

  return (
    <>
      <h2 className="text-center">
        {contact?.id ? "Edit Contact" : "Add Contact"}
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={firstName}
              {...register("firstName")}
              isInvalid={errors?.firstName}
              placeholder="Enter Your First Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.firstName?.message}
            </Form.Control.Feedback>
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
              defaultValue={lastName}
              {...register("lastName")}
              isInvalid={errors?.lastName}
              placeholder="Enter Your Last Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.lastName?.message}
            </Form.Control.Feedback>
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
              defaultValue={email}
              {...register("email")}
              isInvalid={errors?.email}
              placeholder="Enter Your Email"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.email?.message}
            </Form.Control.Feedback>
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
            <Form.Select
              id="profession"
              defaultValue={profession}
              {...register("profession")}
              aria-label="Select Your Profession"
              isInvalid={errors?.profession}
            >
              <option value="" disabled>
                Select Your Profession
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="marketer">Marketer</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors?.profession?.message}
            </Form.Control.Feedback>
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
              defaultValue={image}
              {...register("image")}
              isInvalid={errors?.image}
              placeholder="Enter Your Profile Picture Url"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.image?.message}
            </Form.Control.Feedback>
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
              defaultChecked={gender === "male"}
              value="male"
              {...register("gender")}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              id="gender"
              value="female"
              defaultChecked={gender === "female"}
              {...register("gender")}
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
            <DatePicker
              selected={startDate}
              name="dateOfBirth"
              id="dateOfBirth"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(date) => setStartDate(date)}
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
              defaultValue={bio}
              {...register("bio")}
              isInvalid={errors?.bio}
              placeholder="Enter Your Profile Picture Url"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.bio?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting ? "disabled" : ""}
        >
          {contact?.id ? "Update Contact" : "Add Contact"}
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
