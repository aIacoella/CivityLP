import React, { useState, useEffect, Fragment } from "react";

export default function Header({ state }: { state: string }) {
  const [rendered, setRendered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    <Fragment>
      <div className="header-container standard-header">
        <div className="logo-header">
          <img src="media/CivityLogo.svg" alt="Logo" />
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
      </div>
      <div className="header-container mobile-header">
        <div className="logo-header">
          <img src="media/CivityLogo.svg" alt="Logo" />
          <span>Civity</span>
        </div>
        <div className="v-spacer" />
        <img
          style={{ padding: "0 20px", height: 30 }}
          src="media/menu.svg"
          alt="Menu"
          onClick={() => setIsDrawerOpen(true)}
        />
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
        .mobile-header {
          display: none;
        }
        .drawer-container {
          display: none;
          position: fixed;
          pointer-events: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0);
          z-index: 100;
          transition: 0.3s;
        }
        .drawer {
          transform: translateX(100vw);
          margin: 0;
          padding: 20px 10px;
          transition: 0.3s;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100vw;
          background-color: #1ea67e;
          display: flex;
          flex-direction: column;
        }
        #exit-btn {
          width: 24px;
          padding: 18px;
          opacity: 0;
          transition: 0.3s;
        }
        .drawer-container.open {
          background-color: rgba(0, 0, 0, 0.8);
          pointer-events: inherit;
        }
        .drawer-container.open > .drawer {
          transform: translateX(60px);
        }
        .drawer-container.open > #exit-btn {
          opacity: 1;
        }
        .drawer > a {
          padding: 20px 15px;
          color: white;
          font-size: 17px;
          font-family: "Montserrat", sans-serif;
          text-transform: uppercase;
        }
        .cta-text-mobile {
          font-weight: bold;
        }
        @media only screen and (max-width: 800px) {
          .standard-header {
            display: none;
          }
          .mobile-header {
            display: flex;
          }
          .drawer-container {
            display: block;
          }
        }
      `}</style>
      <div className={"drawer-container " + (isDrawerOpen ? "open" : "closed")}>
        <img
          src="media/exit.svg"
          alt="Exit"
          id="exit-btn"
          onClick={() => setIsDrawerOpen(false)}
        />
        <div className="drawer">
          <a href="#home" onClick={() => setIsDrawerOpen(false)}>
            Home
          </a>
          <a href="#libri" onClick={() => setIsDrawerOpen(false)}>
            Libri
          </a>
          <a href="#come-funziona" onClick={() => setIsDrawerOpen(false)}>
            Come funziona?
          </a>
          <a
            className="cta-text-mobile"
            href="#entra"
            onClick={() => setIsDrawerOpen(false)}
          >
            Entra in Civity
          </a>
        </div>
      </div>
    </Fragment>
  );
}
