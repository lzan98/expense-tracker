import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { FaTrashAlt } from 'react-icons/fa';

const ExpenseItem = (props) => {

  const deleteHandler = (id) => {
    props.onDeleteExpense(id);
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <FaTrashAlt className="expense-item__del" role="button" 
        onClick={() => deleteHandler(props.id)}/>
      </div>
    </Card>
    </li>
  );
};
export default ExpenseItem;
