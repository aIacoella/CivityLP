import React from "react";
import MainSectionBackground from "./MainSectionBackground";
import Button from "./Button";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

export default function MainSection() {
  return (
    <ScrollableAnchor id={"home"}>
      <div className="main-section-container">
        <MainSectionBackground />
        <div className="content">
          <div className="content-container picture left-pic">
            <img src="media/searchItem.png" alt="Search your books" />
          </div>
          <div className="content-container info">
            <h1 id="catch-phrase">
              Stanco di <span className="blue">svendere i tuoi libri</span>{" "}
              usati?
            </h1>
            <h3 className="sub-titles">
              Compra e Vendi i tuoi libri scolastici su Civity.
            </h3>
            <h3 className="sub-titles">
              Metti in vendita <b>ora</b> i tuoi libri in <b>3 minuti</b>
            </h3>
            <div className="center-pic">
              <div>
                <Button onClick={() => goToAnchor("entra")}>
                  ENTRA IN CIVITY
                </Button>
              </div>
              <img src="media/searchItem.png" alt="Search your books" />
            </div>
            <div className="standalone-cta">
              <Button
                style={{ marginTop: 25 }}
                onClick={() => goToAnchor("entra")}
              >
                ENTRA IN CIVITY
              </Button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .main-section-container {
              position: relative;
              min-height: calc(100vh);
              display: flex;
              flex-direction: column;
              overflow: visible;
            }
            .content {
              display: flex;
              flex-direction: row;
              z-index: 1;
              flex: 1;
              padding-top: 55px;
            }
            .content-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .content-container.picture {
              flex: 1;
            }
            .content-container.info {
              flex: 1;
              align-items: flex-start;
              padding: 0 60px;
              padding-bottom: 130px;
            }
            .blue {
              color: #114b5f;
            }
            #catch-phrase {
              margin-bottom: 25px;
            }
            .sub-titles {
              margin-bottom: 10px;
            }
            .divider {
              width: 2px;
              background-color: #c4c4c4;
            }
            .center-pic {
              display: none;
              position: relative;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              align-items: center;
            }
            .center-pic img {
              align-self: center;
              margin: 20px 0;
            }
            .center-pic > div {
              margin: 20px 0;
            }
            .center-cta {
              width: 100%;
              display: flex;
              justify-content: center;
              padding: 30px 0;
              bottom: 40%;
            }
            @media only screen and (max-width: 1200px) {
              .content-container {
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
              }
              .content-container.info {
                align-items: center;
                padding: 0 10px;
                padding-top: 60px;
                text-align: center;
              }
              .left-pic {
                display: none;
              }
              .standalone-cta {
                display: none;
              }
              .center-pic {
                display: flex;
              }
              .center-cta {
                position: absolute;
              }
            }
          `}
        </style>
      </div>
    </ScrollableAnchor>
  );
}
