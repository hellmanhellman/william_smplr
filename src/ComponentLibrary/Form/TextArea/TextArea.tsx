import React from "react";

interface TextAreaProps {
  text: string;
  name?: string;
  id?: string;
  cols?: string;
  rows?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props: any) => {
  const { text, name, id, cols, rows } = props;
  return (
    <>
      <textarea name={name} id={id} cols={cols} rows={rows}>
        {text}
      </textarea>
    </>
  );
};
