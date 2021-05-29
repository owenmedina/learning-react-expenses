import React, { FC } from "react";
import { Expense } from "../../models/Expense";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

interface Props {
  expenses: Expense[];
}

const ExpensesList: FC<Props> = ({ expenses }) => {
  if (expenses.length === 0)
    return (
      <h2 className={styles["expenses-list__fallback"]}>No expenses found</h2>
    );

  return (
    <ul className={styles["expenses-list"]}>
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
