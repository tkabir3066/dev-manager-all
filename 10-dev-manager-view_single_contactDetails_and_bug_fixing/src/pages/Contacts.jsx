import React from "react";
import Contact from "../components/contacts/Contact";
import { v4 as uuidv4 } from "uuid";

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2 className="text-center">All Contacts</h2>
      {contacts.map((contact) => {
        return (
          <Contact
            key={uuidv4()}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </>
  );
};

export default Contacts;
