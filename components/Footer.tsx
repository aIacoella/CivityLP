import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="container">
      <Logo />
      <h4>All rights reserved. Civity 2019.</h4>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#libri">LIBRI</a>
        </li>
        <li>
          <a href="#come-funziona">COME FUNZIONA</a>
        </li>
        <li>
          <a href="#entra">ENTRA IN CIVITY</a>
        </li>
      </ul>
      <style jsx>
        {`
          .container {
            padding: 50px 0;
            background-color: #114b5f;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h4 {
            font-size: 16px;
            margin: 10px 0 25px 0;
            color: white;
            font-family: "Montserrat", sans-serif;
          }
          ul {
            display: flex;
            flex-direction: row;
          }
          li {
            list-style: none;
            margin: 0 10px;
          }
          a {
            list-style: none;
            color: white;
            font-family: "Montserrat", sans-serif;
          }
        `}
      </style>
    </div>
  );
}
