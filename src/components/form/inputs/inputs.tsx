import React from "react";
import { IInputs } from "./inputs.interface";
import styles from "./inputs.module.scss";
import classNames from "classnames";

export const Inputs = (props: any) => {
  const { type, placeholder, id, name, value }: IInputs = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <>
      <input
        className={classnames}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
      />
    </>
  );
};

export default Inputs;

