import { FC } from "react";
import { Data } from "../../models/Data";
import styles from "./ChartBar.module.css";

interface Props {
  data: Data;
  maxValue: number;
}

const ChartBar: FC<Props> = ({ data, maxValue }) => {
  const barFillHeight =
    maxValue > 0 ? `${Math.round((data.value / maxValue) * 100)}%` : "0%";

  return (
    <li className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className={styles["chart-bar__label"]}>{data.label}</div>
    </li>
  );
};

export default ChartBar;
