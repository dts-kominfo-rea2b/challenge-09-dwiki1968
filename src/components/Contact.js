// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = (props) => {
  const { name, phone, photo, email } = props.data;
  return (
    <div className="card">
      <img src={photo} alt="contact-img" />
      <div className="content">
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
