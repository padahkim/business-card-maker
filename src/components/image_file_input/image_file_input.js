import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ name }) => (
  <button className={styles.button}>{name}</button>
);

export default ImageFileInput;
