import React from "react";
import { Labels } from "./labels";
import { Label } from "./labels.interface";

export default { title: "Label" };

const labelText: Label = { text: "This is a label" };

export const primary = () => <Labels text={labelText.text} />;
export const secondary = () => <Labels text={labelText.text} />;

// Körs genom kommandot 'yarn run storybook'
