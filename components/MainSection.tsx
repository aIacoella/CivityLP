import React from "react";
import MainSectionBackground from "./MainSectionBackground";

export default function MainSection() {
  return (
    <div className="main-section-container">
      <MainSectionBackground />
      <div className="content">
        <div className="content-container picture">
          <img src="/media/searchItem.png" alt="Search your books" />
        </div>
        <div className="content-container info">
          <h1 id="catch-phrase">
            Stanco di <span className="blue">svendere i tuoi libri</span> usati?
          </h1>
          <h3 className="sub-titles">
            Compra e Vendi i tuoi libri scolastici su Civity.
          </h3>
          <h3 className="sub-titles">
            Metti in vendita <b>ora</b> i tuoi libri in <b>3 minuti</b>
          </h3>
        </div>
      </div>
      <style jsx>
        {`
          .main-section-container {
            position: relative;
            min-height: calc(100vh - 55px);
            display: flex;
            flex-direction: column;
            overflow: visible;
          }
          .content {
            display: flex;
            flex-direction: row;
            z-index: 1;
            flex: 1;
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
        `}
      </style>
    </div>
  );
}
