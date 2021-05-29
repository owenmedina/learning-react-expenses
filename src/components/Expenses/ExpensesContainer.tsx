import React, { FC, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { Expense } from "../../models/Expense";
import styles from "./ExpensesContainer.module.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

interface Props {
  expenses: Expense[];
}

const ExpensesContainer: FC<Props> = ({ expenses }) => {
  const [year, setYear] = useState(`${new Date().getFullYear()}`);
  const yearHandler = (year: string) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear() === parseInt(year)
  );

  return (
    <div>
      <Card className={styles["expenses"]}>
        <ExpensesFilter onChangeYear={yearHandler} year={year} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpensesContainer;
