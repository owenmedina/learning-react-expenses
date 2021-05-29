import React, { FC, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { Expense } from "../../models/Expense";
import styles from "./ExpensesContainer.module.css";
import ExpensesFilter from "./ExpensesFilter";

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
        {filteredExpenses.length === 0 ? (
          <p>No expenses for this year</p>
        ) : (
          filteredExpenses.map((exp) => (
            <ExpenseItem
              key={exp.id}
              date={exp.date}
              title={exp.title}
              amount={exp.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default ExpensesContainer;
