import React from "react";
import { Buttons } from "./buttons";
import { Button } from "./buttons.interface";

export default { title: "Button" };

const buttonText: Button = { text: "Click Me" };

export const primary = () => <Buttons primary text={buttonText.text} />;
export const secondary = () => <Buttons secondary text={buttonText.text} />;

// Körs genom kommandot 'yarn run storybook'
