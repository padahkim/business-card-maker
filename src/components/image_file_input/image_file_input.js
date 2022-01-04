import { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ name, imageUploader, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      ></input>
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
