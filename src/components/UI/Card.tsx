import React, { FC } from "react";
import styles from "./Card.module.css";

interface Props {
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  const classes = `${styles["card"]} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
