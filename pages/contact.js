import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for Contacting us");
        setPhone("");
        setName("");
        setEmail("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    console.log(e, "change")
    if (e.target.name == "phone") {
      setPhone(e.target.value);

    } else if (e.target.name == "name") {
      setName(e.target.value);

    } else if (e.target.name == "email") {
      setEmail(e.target.value);

    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* <form method='post' action='http://localhost:3000/api/postcontact/'> */}
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className={styles.input}
            id="name"
            name="name"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address:
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            id="email"
            name="email"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone: 
          </label>
          <input
            type="number"
            value={phone}
            onChange={handleChange}
            className={styles.input}
            id="phone"
            name="phone"
          />
        </div>

        <div className={styles.mb3}>
          <label className={styles.formlabel}>Description:</label>
          <br />
          <textarea
            htmlFor="desc"
            value={desc}
            className={styles.input}
            onChange={handleChange}
            name="desc"
            id="desc"
            cols="21"
            rows="2"
            placeholder="Write your concern here"
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
