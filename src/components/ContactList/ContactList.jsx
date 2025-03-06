import css from "./ContactList.module.css";

export default function ContactList({ contactList, handeleDeleteContact }) {
  return (
    <>
      <ul className={css.listContact}>
        {contactList.map((el) => (
          <li key={el.id} className={css.boxContact}>
            <div className={css.contactInfo}>
              <p>Name: {el.name}</p>
              <p>Number: {el.number}</p>
            </div>
            <button
              onClick={() => handeleDeleteContact(el.id)}
              className={css.buttonContact}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
