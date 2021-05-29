import React, { FC } from "react";
import styles from "./ExpenseDate.module.css";

interface Props {
  date: Date;
}

const ExpenseDate: FC<Props> = ({ date }) => {
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
