import React from "react";

export default function Logo() {
  return (
    <div className="logo">
      <img src="media/CivityLogo.svg" alt="Logo" />
      <span>Civity</span>
      <style>
        {`
           .logo {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 14px;
            background-color: #1ea67e;
            border-radius: 999px;
            margin-left: 14px;
          }
          .logo span {
            color: white;
            font-size: 30px;
            padding: 0 20px 0 10px;
            letter-spacing: 0.1em;
          }

          @media only screen and (max-width: 1200px) {
            .logo span {
              font-size: 25px;
              padding: 0 15px 0 10px;
            }
            .logo {
              padding: 10px;
              margin-left: 10px;
            }
          }
          `}
      </style>
    </div>
  );
}
