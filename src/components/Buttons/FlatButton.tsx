import React, { FC } from "react";

interface Props {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

const FlatButton: FC<Props> = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

export default FlatButton;
