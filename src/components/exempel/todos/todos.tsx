import React from 'react';
import { ITodos } from './todos.interface';
import styles from './todos.module.scss';
import classNames from 'classnames';

export const Todos = (props:any) => {
  const { todos } :ITodos = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <ul>
      {todos.map((t) => (
        <li className={classnames}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
