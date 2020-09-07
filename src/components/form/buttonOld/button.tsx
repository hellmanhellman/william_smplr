import React, { FormEvent } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
interface ButtonProps {
  //styles
  primary?: any;
  test?: any;
  btn?: any;
  btn2?: any;


  text: string;
  class?: any;
  onclick: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props: any) => {
  const { text, onclick } = props;

    const classnames = classNames(styles,Object.keys(props)
      .filter((k) => props[k] === true));


  return (
    <>
      <button className={classnames} onClick={onclick}>
        {text} ya
      </button>
    </>
  );
};
