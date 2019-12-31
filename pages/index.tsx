import React from "react";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import BookSection from "../components/BookSection";
//import styles from "../styles/styles";

const Index = () => (
  <React.Fragment>
    <Header />
    <MainSection />
    <BookSection />

    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Montserrat|Rubik:400,700&display=swap");

        * {
          margin: 0;
          padding: 0;
          border: none;
          font-family: "Rubik", sans-serif;
          letter-spacing: 0.05em;
          color: #202020;
        }
        body {
          font-size: 14px;
        }
        h1 {
          font-size: 50px;
          line-height: 50px;
        }
        h2 {
          font-size: 40px;
          line-height: 40px;
        }
        h3 {
          font-size: 25px;
          font-weight: 300;
          line-height: 25px;
        }
        h4 {
          font-size: 20px;
          font-weight: 300;
          line-height: 22px;
        }
      `}
    </style>
  </React.Fragment>
);

export default Index;
