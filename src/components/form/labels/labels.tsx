import React from "react";
import { ILabels } from "./labels.interface";
import styles from "./labels.module.scss";
import classNames from "classnames";

export const Labels = (props: any) => {
  const { text, htmlFor }: ILabels = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return <>
  <label htmlFor={htmlFor} className={classnames}>{text}</label>
  </>;
};

export default Labels;
