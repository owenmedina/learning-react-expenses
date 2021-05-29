import React, { FC, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import FlatButton from "../Buttons/FlatButton";
import styles from "./NewExpense.module.css";
import { Expense } from "../../models/Expense";

interface Props {
  onSaveExpense: (e: Expense) => void;
}

const NewExpense: FC<Props> = ({ onSaveExpense }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const addExpenseButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormIsOpen(true);
  };
  const cancelButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormIsOpen(false);
  };
  const submitExpenseHandler = (e: Expense) => {
    setFormIsOpen(false);
    onSaveExpense(e);
  };

  return (
    <div className={styles["new-expense"]}>
      {!formIsOpen && (
        <FlatButton
          clickHandler={addExpenseButtonHandler}
          text="Add New Expense"
        />
      )}
      {formIsOpen && (
        <ExpenseForm
          onCancel={cancelButtonHandler}
          onSaveExpense={submitExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
