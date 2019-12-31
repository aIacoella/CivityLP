import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/media/CivityLogo.svg" alt="Logo" />
        <span>Civity</span>
      </div>
      <ul className="header-links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Libri</a>
        </li>
        <li>
          <a>Come funziona?</a>
        </li>
      </ul>
      <a className="cta-text">Entra in Civity</a>
      <style jsx>{`
        .header-container {
          z-index: 5;
          position: sticky;
          left: 0;
          right: 0;
          top: 0;
          background-color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
          height: 55px;
        }

        .logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 12px 20px 12px 10px;
          background-color: #1ea67e;
          border-top-right-radius: 999px;
          border-bottom-right-radius: 999px;
        }
        .logo span {
          color: white;
          font-size: 20px;
          padding: 0 10px;
          letter-spacing: 0.1em;
        }

        .header-right {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        ul {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        li {
          text-decoration: none;
          list-style: none;
          padding-left: 35px;
        }

        a {
          font-size: 16px;
        }
        a:hover {
          cursor: pointer;
        }

        .cta-text {
          font-size: 18px;
          color: #114b5f;
          font-weight: bold;
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
}
