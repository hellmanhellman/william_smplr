import React, { ChangeEvent } from "react";
import styles from "./input.module.scss";

interface InputProps {
  //styles
  primary?: boolean;
  test?: boolean;

  type: string;
  placeholder: any;
  value: string;
  class?: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props: any) => {
  const { type, placeholder, value, handleChange } = props;

  const classnames = Object.keys(props)
    .filter((k) => props[k] === true)
    .join(" ");

  return (
    <>
      <input
        className={styles.test}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
