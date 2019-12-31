import React from "react";

export default function BookSection() {
  return (
    <div className="book-section-container">
      <div className="left-content">
        <div className="info-container">
          <h2>I libri costano troppo?</h2>
          <h4>
            La valutazione media di un libro usato è del{" "}
            <b>20% del costo al nuovo</b>
          </h4>
          <h4>
            Per offrirti questo servizio, librerie e online store, devono
            applicare un{" "}
            <span className="red">
              sovrapprezzo del{" "}
              <span style={{ fontSize: "25px", color: "#b00020" }}>200%</span>
            </span>{" "}
            rispetto al quanto lo hanno pagato.
          </h4>
        </div>
        <BookStoreRun />
      </div>
      <div className="right-side">
        <img src="media/bookCosts.svg" alt="Cost of books" />
      </div>
      <style jsx>
        {`
          .book-section-container {
            position: relative;
            min-height: calc(100vh - 55px);
            border-bottom: solid 20px #114b5f;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
          }
          .left-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            max-width: 1000px;
          }
          .info-container {
            margin-left: 50px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .info-container > * {
            margin-bottom: 10px;
          }
          .right-side {
            display: flex;
            margin: 0 20px;
            justify-content: center;
            align-items: center;
          }
          .red {
            font-weight: bold;
            color: #b00020;
          }
        `}
      </style>
    </div>
  );
}

function BookStoreRun() {
  return (
    <div className="book-store-canvas">
      <img src="media/orangePerson.svg" alt="Seller" />
      <img src="media/bookstore.svg" alt="BookStore" />
      <img src="media/bluePerson.svg" alt="Buyer" />
      <style jsx>
        {`
          .book-store-canvas {
            display: flex;
            flex-direction: row;
            margin-left: 50px;
          }
        `}
      </style>
    </div>
  );
}
