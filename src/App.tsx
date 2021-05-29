import React, { useState } from "react";
import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { Expense } from "./models/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    new Expense(new Date(), "Car Insurance", 297.586),
  ]);
  const newExpenseHandler = (e: Expense) => {
    setExpenses((prev) => [...prev, e]);
  };
  return (
    <div>
      <NewExpense onSaveExpense={newExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
