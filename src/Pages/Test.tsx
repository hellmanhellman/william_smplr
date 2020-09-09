import React, { useState, ChangeEvent, FormEvent } from "react";
import Buttons from "../components/form/buttons/buttons";
import Inputs from "../components/form/inputs/inputs";
import Textareas from "../components/form/textareas/textareas";
import Labels from "../components/form/labels/labels";
import Dropdowns from "../components/form/dropdowns/dropdowns";

import { Button } from "../components/form/buttons/buttons.interface";


const initialDropDownValues = ["volvo", "vw", "bmw"];

export const Test = () => {
  // const [InputValue, setInputValue] = useState<string>("");
  // const [FormInputValue, setFormInputValue] = useState<string>("");
  // const [DropDownValue, setDropDownValue] = useState<string[]>(initialStateDropDownValues);

  // const handleClick = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   alert("u clicked the button");
  // };

  // const handleChangePW = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormInputValue(e.target.value);
  // };

  return (
    <>
      <form>
        <Inputs type="text" placeholder="Enter Your Name" />
        <Inputs type="radio"/>
        <Inputs type="color"/>
        <Inputs type="date"/>
        <Inputs type="file"/>
        <Inputs type="checkbox"/>
        <Inputs type="range"/>
        <Inputs type="number"/>
        <br/>
        <Buttons primary secondary text="Click me!" />
        <br />
        <Textareas placeholder="textarea placeholder" />
        <br />
        <Labels text="test label" />
        <br />
        <Dropdowns options={initialDropDownValues} />
      </form>
      {/* From /Pages/Test
      <Button text="click me" onclick={handleClick} />
      <Input
        placeholder="Enter your password"
        type="password"
        value={InputValue}
        handleChange={handleChangePW}
      />
      <h1 className="william">test</h1>
      <p>your password is: {InputValue}</p>

      <div id="test_form">
        <form>
          <Input
            placeholder="Enter your name"
            type="text"
            value={FormInputValue}
            handleChange={handleChangeForm}
          />
          <Button
            primary
            text="Submit your name"
            onclick={() =>
              alert(`welcome ${FormInputValue} your name is saved!`)
            }
          />
        </form>
      </div>

      <Dropdown options={DropDownValue}/> */}
    </>
  );
};
