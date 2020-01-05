import React, { useState } from "react";
import Button from "./Button";
import Selectable from "./Selectable";
import axios from "axios";
import Logo from "./Logo";
import ScrollableAnchor from "react-scrollable-anchor";

export default function EnterCivitySection() {
  const [isSchool, setIsSchool] = useState(false);
  const [email, setEmail] = useState("");

  const enterCivity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .post("/api/users", { isSchool, email })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <ScrollableAnchor id={"entra"}>
      <div className="enter-section-container">
        <div className="side"></div>
        <form className="content">
          <div className="title">
            <h3>Entra in </h3>
            <Logo />
          </div>
          <div className="field-container">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="selectable-container">
            <Selectable
              selected={!isSchool}
              style={{ marginRight: 10 }}
              onClick={() => setIsSchool(false)}
            >
              UNIVERSITÀ
            </Selectable>
            <Selectable selected={isSchool} onClick={() => setIsSchool(true)}>
              SCUOLA
            </Selectable>
          </div>
          <div className="h-divider"></div>
          <Button style={{ marginTop: 20 }} onClick={enterCivity}>
            ENTRA IN CIVITY
          </Button>
        </form>
        <div className="side"></div>
        <style jsx>
          {`
            .enter-section-container {
              position: relative;
              display: flex;
              flex-direction: row;
              margin: 150px 0;
            }
            .side {
              flex: 1;
            }
            .content {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 500px;
            }
            .title {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .title h3 {
              font-size: 30px;
              font-weight: bold;
              color: #114b5f;
            }
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
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .field-container {
              width: 100%;
              display: flex;
              flex-direction: column;
              margin-top: 15px;
            }
            label {
              font-family: "Montserrat", sans-serif;
              font-size: 14px;
              margin-bottom: 2px;
              margin-left: 5px;
              color: #114b5f;
            }
            .field-container #email {
              border: solid 1px #c4c4c4;
              padding: 6px 10px;
              font-size: 14px;
              border-radius: 6px;
              outline: none;
            }
            .field-container #email:focus {
              border-color: #1ea67e;
            }

            .h-divider {
              height: 1px;
              background-color: #c4c4c4;
              width: 60%;
              margin-top: 20px;
            }

            .selectable-container {
              margin-top: 20px;
              display: flex;
            }
          `}
        </style>
      </div>
    </ScrollableAnchor>
  );
}
