import React from "react";
import { Textareas } from "./textareas";
import { Textarea } from "./textareas.interface";

export default { title: "Textarea" };

const placeholderText: Textarea = { placeholder: "This is a placeholder" };

export const primary = () => <Textareas placeholder={placeholderText.placeholder} />;
export const secondary = () => <Textareas placeholder={placeholderText.placeholder} />;

// Körs genom kommandot 'yarn run storybook'
