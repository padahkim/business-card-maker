import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        card={cards[key]}
        key={key}
        onSubmit={deleteCard}
        updateCard={updateCard}
        deleteCard={deleteCard}
        FileInput={FileInput}
      />
    ))}
    <CardAddForm onAdd={addCard} FileInput={FileInput} />
  </section>
);

export default Editor;
