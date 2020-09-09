import React from "react";
import { Images } from "./images";
import { Image } from "./images.interface";

export default { title: "Image" };

const imageAttributes: Image = { src: "https://www.w3schools.com/images/lamp.jpg", alt: "Lamp" };

export const primary = () => (
  <Images src={imageAttributes.src} alt={imageAttributes.alt} />
);
export const secondary = () => (
  <Images src={imageAttributes.src} alt={imageAttributes.alt} />
);

// Körs genom kommandot 'yarn run storybook'
