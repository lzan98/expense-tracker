import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import React from "react";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const deleteHandler = (id) => {
    props.onDeleteExpense(id);
  }

  const filteredExpenses = props.items
    .map((expense) => ({
      id: expense.id,
      key: expense.key,
      title: expense.title,
      amount: expense.amount,
      date: expense.date.toDate()
    }))
    .filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          //selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}
        onDeleteExpense={deleteHandler} />
      </Card>
    </div>
  );
};

export default Expenses;
