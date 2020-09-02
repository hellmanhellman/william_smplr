import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../ComponentLibrary/Form/Button/Button";
import { Input } from "../ComponentLibrary/Form/Input/Input";
import { Dropdown } from "../ComponentLibrary/Form/Dropdown/Dropdown";

import "./william.scss";

const initialStateDropDownValues = ["volvo", "vw", "bmw"]

export const Test = () => {
  const [InputValue, setInputValue] = useState<string>("");
  const [FormInputValue, setFormInputValue] = useState<string>("");
  const [DropDownValue, setDropDownValue] = useState<string[]>(initialStateDropDownValues);

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("u clicked the button");
  };

  const handleChangePW = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputValue(e.target.value);
  };

  console.log(DropDownValue);

  return (
    <>
      From /Pages/Test
      <br />
      <br />
      <Button text="click me" onclick={handleClick} />
      <br />
      <br />
      <Input
        placeholder="Enter your password"
        type="password"
        value={InputValue}
        handleChange={handleChangePW}
      />
      <h1 className="william">test</h1>
      <p>your password is: {InputValue}</p>
      <br />
      <br />
      <br />
      <div id="test_form">
        <form>
          <Input
            placeholder="Enter your name"
            type="text"
            value={FormInputValue}
            handleChange={handleChangeForm}
          />
          <br />
          <br />

          <Button
            primary
            text="Submit your name"
            onclick={() =>
              alert(`welcome ${FormInputValue} your name is saved!`)
            }
          />
        </form>
      </div>

      <Dropdown options={DropDownValue}/>
    </>
  );
};
