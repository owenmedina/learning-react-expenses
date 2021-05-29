import React, { FC } from "react";

import styles from "./ExpensesFilter.module.css";

interface Props {
  year: string;
  onChangeYear: (newYear: string) => void;
}

const ExpensesFilter: FC<Props> = ({ year, onChangeYear }) => {
  const years = [];
  for (let i = 1990; i <= new Date().getFullYear(); i++) years.push(i);
  const changeYearHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(e.target.value);
  };
  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={year} onChange={changeYearHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
