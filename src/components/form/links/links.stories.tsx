import React from "react";
import { Links } from "./links";
import { Link } from "./links.interface";

export default { title: "Link" };

const linkAttributes: Link = { text: "Go To Google", href: "https://google.com" };

export const primary = () => (
  <Links text={linkAttributes.text} href={linkAttributes.href} />
);
export const secondary = () => (
  <Links text={linkAttributes.text} href={linkAttributes.href} />
);

// Körs genom kommandot 'yarn run storybook'
