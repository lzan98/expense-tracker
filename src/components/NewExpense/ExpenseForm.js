import React, { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const titleRef = useRef(); 
  const amountRef = useRef();
  const dateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleRef.current.value,
      amount: +amountRef.current.value,
      date: new Date(dateRef.current.value),
    };

    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            ref={titleRef}
            // value={enteredTitle}
            // onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            ref={amountRef}
            // value={enteredAmount}
            // onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            ref={dateRef}
            // value={enteredDate}
            // onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}> Cancel </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
