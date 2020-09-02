import React from "react";
import dropdown from "./dropdown.module.scss";

interface DropdownProps {
  name?: string;
  id?: string;
  options: string[];
}

export const Dropdown: React.FC<DropdownProps> = (props: any) => {
  const { name, id, options } = props;

  //   const classnames = Object.keys(props)
  //     .filter((k) => props[k] === true)
  //     .join(" ");

  return (
    <>
      <select className={dropdown.primary} name={name} id={id}>
        {options.map((item: string) => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </select>
    </>
  );
};
