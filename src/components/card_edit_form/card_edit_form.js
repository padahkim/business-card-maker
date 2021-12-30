import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      ></input>
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      ></input>
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
      ></textarea>
      <div className={styles.fileInput}>
        <Button className={styles.button} name="DELETE" onClick={onSubmit} />
        <ImageFileInput name="image" />
      </div>
    </form>
  );
};
export default CardEditForm;
