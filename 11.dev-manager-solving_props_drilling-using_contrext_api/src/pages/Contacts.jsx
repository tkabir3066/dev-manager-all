import React, { useContext } from "react";
import Contact from "../components/contacts/Contact";
import { v4 as uuidv4 } from "uuid";
import { ContactContext } from "../context/Contact.context";

const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts, deleteContact } = context;
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
