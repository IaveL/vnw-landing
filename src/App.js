import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Header from "./components/Header";
import Applications from "./components/Applications";
import About from "./components/About";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Applications />
      <About />
    </>
  );
};

export default App;
