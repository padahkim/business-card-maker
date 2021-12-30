import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} onSubmit={addCard} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
