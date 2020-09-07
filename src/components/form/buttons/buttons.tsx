import React from "react";
import { IButtons } from "./buttons.interface";
import styles from "./buttons.module.scss";
import classNames from "classnames";

export const Buttons = (props: any) => {
  const { text }: IButtons = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return <button className={classnames}>{text}</button>;
};

export default Buttons;
