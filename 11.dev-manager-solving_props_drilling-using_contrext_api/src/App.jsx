import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import { Container } from "react-bootstrap";
import Contacts from "./pages/Contacts";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";
import ContactDetails from "./pages/ContactDetails";

const App = () => {
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
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add-contact" element={<AddContact />} />

            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
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
