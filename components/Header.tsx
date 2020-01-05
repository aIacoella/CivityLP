import React, { useState, useEffect } from "react";

export default function Header({ state }: { state: string }) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const getUnderlineOffset = () => {
    const element = document.getElementById(state);
    if (element)
      return {
        offset: element.offsetLeft - 3,
        width: element.clientWidth
      };
    else return { offset: 0, width: 0 };
  };

  const { offset, width } = rendered
    ? getUnderlineOffset()
    : { offset: 0, width: 0 };

  return (
    <div className="header-container">
      <div className="logo-header">
        <img src="/media/CivityLogo.svg" alt="Logo" />
        <span>Civity</span>
      </div>
      <div className="links-container">
        <div className="v-spacer" />
        <div className="header-links">
          <li id="#home">
            <a href="#home">Home</a>
          </li>
          <li id="#libri">
            <a href="#libri">Libri</a>
          </li>
          <li id="#come-funziona">
            <a href="#come-funziona">Come funziona?</a>
          </li>
          <div className="h-spacer" />
          <li id="#entra">
            <a className="cta-text" href="#entra">
              Entra in Civity
            </a>
          </li>
        </div>
        <div className="v-spacer">
          {rendered && (
            <div
              className="header-underline"
              style={{
                transform: `translateX(${offset +
                  width / 2}px) scaleX(${width})`
              }}
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .v-spacer {
          flex: 1;
        }
        .links-container {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }
        .header-underline {
          height: 2px;
          background-color: #1ea67e;
          width: 1px;
          transition: 0.2s;
        }
        .header-container {
          z-index: 5;
          position: fixed;
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
        .h-spacer {
          flex: 1;
        }
        .logo-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 12px 20px 12px 10px;
          background-color: #1ea67e;
          border-top-right-radius: 999px;
          border-bottom-right-radius: 999px;
        }
        .logo-header span {
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
        .header-links {
          display: flex;
          flex-direction: row;
        }
        li {
          text-decoration: none;
          list-style: none;
          margin-left: 25px;
          margin: 0 10px;
          padding: 2px 10px;
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
        }
      `}</style>
    </div>
  );
}
