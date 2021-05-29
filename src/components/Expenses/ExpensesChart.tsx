import React, { FC } from "react";
import Chart from "../Chart/Chart";
import { Data } from "../../models/Data";
import { Expense } from "../../models/Expense";

interface Props {
  expenses: Expense[];
}

const ExpensesChart: FC<Props> = ({ expenses }) => {
  const chartData = [
    new Data(0, "Jan"),
    new Data(0, "Feb"),
    new Data(0, "Mar"),
    new Data(0, "Apr"),
    new Data(0, "May"),
    new Data(0, "Jun"),
    new Data(0, "Jul"),
    new Data(0, "Aug"),
    new Data(0, "Sep"),
    new Data(0, "Oct"),
    new Data(0, "Nov"),
    new Data(0, "Dec"),
  ];

  for (const exp of expenses) {
    const month = exp.date.getMonth();
    chartData[month].value += exp.amount;
  }

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return <Chart data={chartData} maxValue={maxValue} />;
};

export default ExpensesChart;
