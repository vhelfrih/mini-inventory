import React from "react";

import "./IngredientList.css";

const IngredientList = (props) => {
  return (
    <section className="ingredient-list">
      <ul>
        {props.ingredients.map((ig) => (
          // <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
          //   <span>{ig.title}</span>
          //   <span>{ig.amount}x</span>
          // </li>
          <li key={ig.id}>
            <span>{ig.title}</span>
            <span>{ig.amount}</span>
            <span>{ig.place}</span>
            <span>{ig.date}</span>
            <button type="submit" onClick={props.onRemoveItem.bind(this, ig.id)}>Delete</button>
            {/* <button type="submit" onClick={props.onEditItem.bind(this, ig.id)}>Edit</button> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
