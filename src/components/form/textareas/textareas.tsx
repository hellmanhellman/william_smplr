import React from "react";
import { ITextareas } from "./textareas.interface";
import styles from "./textareas.module.scss";
import classNames from "classnames";

export const Textareas = (props: any) => {
  const { placeholder }: ITextareas = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <textarea
      className={classnames}
      placeholder={placeholder}
      name=""
      id=""
      cols={30}
      rows={10}
    ></textarea>
  );
};

export default Textareas;
