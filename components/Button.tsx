import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children}
      <style jsx>
        {`
          button {
            background-color: #1ea67e;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            padding: 10px 30px;
            color: white;
            border-radius: 10px;
            outline: none;
          }
          button:hover {
            cursor: pointer;
            box-shadow: 0px 0px 10px rgba(32, 32, 32, 0.5);
            transition: 0.2s;
          }
        `}
      </style>
    </button>
  );
}
