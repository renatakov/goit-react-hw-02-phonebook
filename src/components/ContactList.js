import React from "react";

const ContactList = ({contacts, onChange}) => {
  console.log(contacts)
  return (
    <>
      <ul>
        <h2>Contact list</h2>
        {contacts.map((elem) => {
          console.log(elem)
          return(
            <li key={elem.id}>
              <h3>{elem.name}</h3>
              <p>{elem.number}</p>
              <button type="button" onClick={() => onChange(elem.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default ContactList;