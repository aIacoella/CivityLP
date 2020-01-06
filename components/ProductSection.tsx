import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export default function ProductSection() {
  return (
    <ScrollableAnchor id={"come-funziona"}>
      <div className="product-section-container">
        <div className="col">
          <h3>Compra</h3>
          <h4>
            Cerca i libri che ti interessano, contatta il venditore tramite la
            nostra chat, accordati sul pagamento, tutto dalla stessa
            applicazione
          </h4>
          <img
            src="media/buy-pic.png"
            alt="Compra"
            style={{ marginTop: "25px" }}
          />
        </div>
        <div className="divider"></div>
        <div className="col">
          <h3>Vendi</h3>
          <div className="sell-content">
            <img
              src="media/selling-time.png"
              alt="Vendi"
              style={{ marginBottom: 8 }}
            />
            <ul className="sell-infos">
              <li>Cerca i libri che vuoi vendere</li>
              <li>Aggiungi le informazioni</li>
              <li>Vendi!</li>
            </ul>
          </div>
        </div>
        <style jsx>
          {`
            .product-section-container {
              position: relative;
              display: flex;
              flex-direction: row;
            }
            .col {
              margin: 60px;
              display: flex;
              flex-direction: column;
              flex: 1;
              align-items: center;
            }
            .col h3 {
              font-weight: bold;
              font-size: 30px;
              margin-bottom: 40px;
            }
            .divider {
              width: 2px;
              background-color: #c4c4c4;
            }
            .sell-content {
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .sell-infos {
              margin-left: 50px;
              list-style: decimal;
            }
            .sell-infos > li {
              font-size: 22px;
              margin: 20px 0;
            }
            .sell-infos > li:last-child {
              font-weight: bold;
            }
            @media only screen and (max-width: 1200px) {
              .product-section-container {
                flex-direction: column;
              }
              .divider {
                width: auto;
                height: 2px;
              }
              .col {
                margin: 40px 15px;
              }
              .sell-content {
                flex-direction: column;
              }
            }
          `}
        </style>
      </div>
    </ScrollableAnchor>
  );
}
