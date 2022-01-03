import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message } = card;

  const onSubmit = () => {
    deleteCard(card);
  };
  const onChange = (event) => {
    if (!event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        onChange={onChange}
        value={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        onChange={onChange}
        value={company}
      ></input>
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        onChange={onChange}
        value={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        onChange={onChange}
        value={email}
      ></input>
      <textarea
        className={styles.textarea}
        name="message"
        onChange={onChange}
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <Button className={styles.button} name="DELETE" onClick={onSubmit} />
        <ImageFileInput name="image" />
      </div>
    </form>
  );
};
export default CardEditForm;
