import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useEffect, useState} from "react";
import { firestore } from './firebase';
import { doc, addDoc, collection, getDocs, deleteDoc } from '@firebase/firestore';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const ref = collection(firestore, "expenses");

  useEffect(() => {

    const getExpenses = async() => {
      const data = await getDocs(ref);
      setExpenses(data.docs.map(
        (doc) => ({
          ...doc.data(), id: doc.id
        })
      ))
    }

    getExpenses();

  }, []);
  

  const addExpenseHandler = expense => {
    try {
      addDoc(ref, expense);
    } catch (e) {
      console.log(e);
    }
  }

  const deleteExpenseHandler = async (id) => {
    const expenseDoc = doc(firestore, "expenses", id)
    await deleteDoc(expenseDoc);
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
