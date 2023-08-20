import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import { Container } from "react-bootstrap";
import Contacts from "./pages/Contacts";
// import AddContact from "./contacts/ContactForm";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";

const initialContacts = [
  {
    id: "1",
    firstName: "Barbette",
    lastName: "PfertNer",
    email: "bpfertner0@drupal.org",
    profession: "Web Developer",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    dateOfBirth: "17/05/1996",
    bio: "all about me",
  },
  {
    id: "2",
    firstName: "Brad",
    lastName: "Pitt",
    email: "bradpitt233@drupal.org",
    profession: "Software Developer",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    dateOfBirth: "14/11/1987",
    bio: "all about me",
  },
  {
    id: "3",
    firstName: "Phil",
    lastName: "Hayden",
    email: "philhayden25@gmail.com",
    profession: "Digital Marketer",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    dateOfBirth: "12/03/1991",
    bio: "all about me",
  },
  {
    id: "4",
    firstName: "Maria",
    lastName: "Smith",
    email: "mariasmith124@gmail.com",
    profession: "Data Analyst",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    dateOfBirth: "08/03/1993",
    bio: "all about me",
  },
  {
    id: "5",
    firstName: "Jacob",
    lastName: "Read",
    email: "jacobread1993@drupal.org",
    profession: "Data Analyst",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    dateOfBirth: "11/11/1990",
    bio: "all about me",
  },
  {
    id: "6",
    firstName: "Ryan",
    lastName: "Goldsmith",
    email: "ryanhero11@drupal.org",
    profession: "Machine Learning",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    dateOfBirth: "07/12/1988",
    bio: "all about me",
  },
  {
    id: "7",
    firstName: "Bella",
    lastName: "Jacob",
    email: "bellajacob@drupal.org",
    profession: "Artificial Intelligence",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    dateOfBirth: "06/12/1996",
    bio: "all about me",
  },
  {
    id: "8",
    firstName: "Jemima",
    lastName: "Philip",
    email: "jemimaphilip23@drupal.org",
    profession: "Artificial Intelligence",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    dateOfBirth: "17/08/1996",
    bio: "all about me",
  },
];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  // update contact

  const updateContact = (contactToUpdate, id) => {
    const contactWithUpdate = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contactToUpdate,
        };
      } else {
        return contact;
      }
    });

    setContacts(contactWithUpdate);
  };
  const addContact = (contact) => {
    console.log(contact);
    const contactToAdd = {
      id: uuidv4(),
      ...contact,
    };

    setContacts([contactToAdd, ...contacts]);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Header />

        <Container
          style={{ width: "800px", margin: "0 auto" }}
          className="pt-2"
        >
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <Contacts contacts={contacts} deleteContact={deleteContact} />
              }
            />
            <Route
              path="/add-contact"
              element={<AddContact addContact={addContact} />}
            />
            <Route
              path="/edit-contact/:id"
              element={
                <EditContact
                  contacts={contacts}
                  updateContact={updateContact}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
