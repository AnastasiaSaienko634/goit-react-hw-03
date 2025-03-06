import css from "./App.module.css";
import { Formik } from "formik";
// import ContactForm from "../ContactFrom/ContactFrom";
// import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactFrom/ContactFrom";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [contact, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const handelContactFrom = (values, actions) => {
    const newUser = { ...values, id: nanoid() };
    setContact((prev) => [...contact, newUser]);
    console.log([...contact, newUser]);
    actions.resetForm();
  };
  const handeleDeleteContact = (contactId) => {
    setContact((prevId) => {
      // prevId - это массив, который содержит текущие иды
      return prevId.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handelContactFrom={handelContactFrom} />
        {/* <SearchBox /> */}
        <ContactList
          contactList={contact}
          handeleDeleteContact={handeleDeleteContact}
        />
      </div>
    </>
  );
}
