import React, { FormEvent } from "react";
import button from "./button.module.scss";

interface ButtonProps {
  //styles
  primary?: boolean;
  test?: boolean;

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
      {/*Hårdkodad className nu, inte dynamisk än  - className={classnames}*/}
      <button className={button.test} onClick={onclick}>
        {text}
      </button>
    </>
  );
};
