import React, { FC, useState } from "react";
import { Expense } from "../../models/Expense";
import styles from "./ExpenseForm.module.css";

interface Props {
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onSaveExpense: (e: Expense) => void;
}

const ExpenseForm: FC<Props> = ({ onCancel, onSaveExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (
      submitIsDisabled &&
      e.target.value !== "" &&
      amount !== "" &&
      date !== ""
    )
      setSubmitIsDisabled(false);
  };

  const updateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    if (
      submitIsDisabled &&
      e.target.value !== "" &&
      title !== "" &&
      date !== ""
    )
      setSubmitIsDisabled(false);
  };
  const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (
      submitIsDisabled &&
      e.target.value !== "" &&
      title !== "" &&
      amount !== ""
    )
      setSubmitIsDisabled(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense = new Expense(new Date(date), title, parseFloat(amount));
    onSaveExpense(expense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input type="text" onChange={updateTitle} value={title}></input>
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={updateAmount}
            value={amount}
          ></input>
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="1990-01-01"
            max={`${new Date().getFullYear()}-12-31`}
            onChange={updateDate}
            value={date}
          ></input>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" disabled={submitIsDisabled}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
