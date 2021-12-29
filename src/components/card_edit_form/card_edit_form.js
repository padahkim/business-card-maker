import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const Card_edit_form = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={company}
      ></input>
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={email}
      ></input>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <Button name="DELETE" onClick={onSubmit} />
        <ImageFileInput name="image" />
      </div>
    </form>
  );
};
export default Card_edit_form;
