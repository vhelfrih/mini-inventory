import React, { useState } from "react";
import LoadingIndicator from '../UI/LoadingIndicator'
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({title: enteredTitle, amount: enteredAmount, place: enteredPlace, date: enteredDate});
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredPlace('');
    // setEnteredDate('');
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(event) => {
                setEnteredTitle(event.target.value);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(event) => {
                setEnteredAmount(event.target.value);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="place">Place</label>
            <select
              type="text"
              id="place"
              value={enteredPlace}
              onChange={(event) => {
                setEnteredPlace(event.target.value);
              }}
              required
            >
              <option value="basement">basement</option>
              <option value="pantry">pantry</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="place">Expiry Date</label>
            <input
              type="date"
              id="date"
              value={enteredDate}
              onChange={(event) => {
                setEnteredDate(event.target.value);
              }}
              min="2020-10-01"
            >
            </input>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Item</button>
            {props.loading ? <LoadingIndicator/> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
