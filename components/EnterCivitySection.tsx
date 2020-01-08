import React, { useState } from "react";
import Button from "./Button";
import Selectable from "./Selectable";
import axios from "axios";
import Logo from "./Logo";
import ScrollableAnchor from "react-scrollable-anchor";

export default function EnterCivitySection() {
  const [isSchool, setIsSchool] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const enterCivity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCompleted(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      axios
        .post("/api/users", { isSchool, email })
        .then(res => {
          setCompleted(true);
        })
        .catch(err => {
          if (err.response.status === 400)
            setError("L'email inserita sembra essere già stata utilizzata");
          else setError("Ops... qualcosa è andato storto. Riprova più tardi");
        });
    } else {
      setError("L'email inserita non sembra essere valida");
    }
  };

  return (
    <ScrollableAnchor id={"entra"}>
      <div className="enter-section-container">
        <div className="side"></div>
        <form className="content">
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h2 style={{ margin: "20px 0" }}>Come posso iniziare?</h2>
            <h4
              style={{ margin: "10px 0", color: "#0000ee", fontWeight: "bold" }}
            >
              <a
                className="std-link"
                href="https://forms.gle/TgR4j9Wus5zB7P82A"
                target="_blank"
              >
                Vuoi avere accesso anticipato a Civity?
              </a>
            </h4>
            <div className="h-divider" style={{ alignSelf: "center" }}></div>
            <h4 style={{ marginTop: "20px" }}>
              Al momento stiamo ultimando gli ultimi ritocchi per rendere la tua
              esperienza fantastica. Intanto però puoi entrare da subito a far
              parte della comunità di Civity lasciando qui la tua email.
            </h4>
          </div>
          <h4 style={{ margin: "30px 0" }}>
            <b>Cosa aspetti?</b>
          </h4>
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
          <h5
            id="error-message"
            style={{ color: completed ? "#1ea67e" : "#b00020" }}
          >
            {completed ? "Benvenuto in Civity" : error}
          </h5>
          <Button style={{ marginTop: 15 }} onClick={enterCivity}>
            ENTRA IN CIVITY
          </Button>
        </form>
        <div className="side"></div>
        <style jsx>
          {`
            #error-message {
              text-align: center;
              font-family: "Montserrat", sans-serif;
              font-size: 14px;
              margin: 10px 0;
            }
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
              flex: 2;
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 700px;
              min-width: 300px;
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
              max-width: 500px;
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

            .std-link {
              color: #0000ee;
              text-decoration: underline;
              cursor: auto;
              font-size: 18px;
            }
            .std-link:hover {
              cursor: pointer;
            }

            @media only screen and (max-width: 1200px) {
              .enter-section-container {
                margin: 70px 0;
              }
              .title > h3 {
                font-size: 25px;
              }
            }
          `}
        </style>
      </div>
    </ScrollableAnchor>
  );
}

function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
