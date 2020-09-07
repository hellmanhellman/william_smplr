import React from "react";
import { IInputs } from "./inputs.interface";
import styles from "./inputs.module.scss";
import classNames from "classnames";

export const Inputs = (props: any) => {
  const { typeOfInput, placeholder }: IInputs = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <input
      className={classnames}
      type={typeOfInput}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
