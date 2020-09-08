import React from "react";
import { Dropdowns } from "./dropdowns";
import { Dropdown } from "./dropdowns.interface";

export default { title: "Dropdown" };

const optionsValues: string[] = ["volvo", "bmw", "vw"]

export const primary = () => <Dropdowns options={optionsValues} />;
export const secondary = () => <Dropdowns options={optionsValues} />;

// Körs genom kommandot 'yarn run storybook'
