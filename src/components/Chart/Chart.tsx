import React, { FC } from "react";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.css";
import { Data } from "../../models/Data";

interface Props {
  data: Data[];
  maxValue: number;
}

const Chart: FC<Props> = ({ data, maxValue }) => {
  return (
    <div className={styles["chart"]}>
      {data.map((d) => (
        <ChartBar data={d} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
