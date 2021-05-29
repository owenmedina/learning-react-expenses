import React, { FC } from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
import { Expense } from "../../models/Expense";

interface Props {
  onSaveExpense: (e: Expense) => void;
}

const NewExpense: FC<Props> = ({ onSaveExpense }) => {
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
};

export default NewExpense;
