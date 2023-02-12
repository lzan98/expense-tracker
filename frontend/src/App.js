import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useEffect, useState} from "react";
import { firestore } from './firebase';
import { doc, addDoc, collection, getDocs, deleteDoc } from '@firebase/firestore';
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const ref = collection(firestore, "expenses");


  const getExpenses = async() => {
      fetch('http://localhost:4000/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => {
        console.log(err.message);
      })
    }

  useEffect(() => {
    getExpenses();
  }, []);

  

  const addExpenseHandler = async (expense) => {
    await fetch('http://localhost:4000/create', {
      method: 'POST',
      body: JSON.stringify({
        amount: expense.amount,
        date: expense.date,
        title: expense.title
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.json())
    .then()
      .catch((err) => {
        console.log(err.message);
      });

    getExpenses();
  }

  const deleteExpenseHandler = async (id) => {
    await fetch('http://localhost:4000/delete', {
      method: 'POST',
      body: JSON.stringify({
        id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.json())
    .then()
      .catch((err) => {
        console.log(err.message);
      });

    getExpenses();
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} 
      onDeleteExpense = {deleteExpenseHandler}></Expenses>
    </div>
  );
}

export default App;
