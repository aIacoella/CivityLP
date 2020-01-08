import React, { useEffect, useState } from "react";
import Head from "next/head";
import { configureAnchors } from "react-scrollable-anchor";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import BookSection from "../components/BookSection";
import ProductSection from "../components/ProductSection";
import EnterCivitySection from "../components/EnterCivitySection";
import Footer from "../components/Footer";

configureAnchors({
  offset: -55,
  scrollDuration: 500
});

const updateNavState = (hash: string) => {
  if (!hash) return "#home";
  else return hash;
};

const Index = () => {
  const [navState, setNavState] = useState("home");

  useEffect(() => {
    setNavState(updateNavState(window.location.hash));
    window.addEventListener("hashchange", e => {
      setNavState(updateNavState(window.location.hash));
    });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title key="a">Civity</title>
        <meta
          key="b"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta key="c" name="theme-color" content="#1EA67E" />
        <meta key="d" name="msapplication-navbutton-color" content="#1EA67E" />
        <meta
          key="e"
          name="apple-mobile-web-app-status-bar-style"
          content="#1EA67E"
        />
        <link key="f" rel="icon" href="media/logo.png" />
      </Head>
      <Header state={navState} />
      <MainSection />
      <BookSection />
      <ProductSection />
      <EnterCivitySection />
      <Footer />

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
            overflow-x: hidden;
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
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
          @media only screen and (max-width: 800px) {
            h1 {
              font-size: 40px;
              line-height: 40px;
            }
            h2 {
              font-size: 30px;
              line-height: 30px;
            }
            h3 {
              font-size: 20px;
              font-weight: 300;
              line-height: 20px;
            }
            h4 {
              font-size: 18px;
              font-weight: 300;
              line-height: 20px;
            }
        `}
      </style>
    </React.Fragment>
  );
};

export default Index;
