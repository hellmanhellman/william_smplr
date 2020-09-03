import React, { FormEvent } from "react";
import button from "./button.module.scss";

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

    const classnames = Object.keys(props)
      .filter((k) => props[k] === true)
      .join(" ");


  return (
    <>
      {/*H�rdkodad className nu, inte dynamisk �n  - className={classnames}*/}
      <button className={classnames} onClick={onclick}>
        {text}
      </button>
    </>
  );
};
