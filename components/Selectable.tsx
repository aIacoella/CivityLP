import React from "react";

interface SelectableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  selected?: boolean;
  children?: React.ReactNode;
}

export default function Selectable({
  selected,
  children,
  style,
  ...rest
}: SelectableProps) {
  const textColor = selected ? "white" : "#1ea67e";
  const bgColor = !selected ? "white" : "#1ea67eBB";
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor, ...style }}
      {...rest}
    >
      {children}
      <style jsx>
        {`
          div {
            font-family: "Montserrat", sans-serif;
            font-size: 13px;
            padding: 8px 12px;
            color: white;
            border-radius: 10px;
            outline: none;
            border: solid 1px #1ea67e;
            text-align: center;
            width: 100px;
            transition: 0.3s;
          }
          div:hover,
          focus {
            cursor: pointer;
            transform: translateY(-4px);
          }
        `}
      </style>
    </div>
  );
}
