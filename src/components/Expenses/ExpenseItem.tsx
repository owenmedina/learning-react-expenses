import React, { FC } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styles from "./ExpenseItem.module.css";
import ExpensesFilter from "./ExpensesFilter";

interface Props {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: FC<Props> = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={date} />
        <div className={styles["expense-item__description"]}>
          <h2>{title}</h2>
          <div className={styles["expense-item__price"]}>
            ${amount.toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
