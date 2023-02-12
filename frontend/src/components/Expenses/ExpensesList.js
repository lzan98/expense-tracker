import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  const deleteHandler = (id) => {
    props.onDeleteExpense(id);
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem onDeleteExpense={deleteHandler}
        key= {expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
};

export default ExpensesList;
