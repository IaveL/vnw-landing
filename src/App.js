import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Header from "./components/Header";
import Applications from "./components/Applications";
import About from "./components/About";
import Courses from "./components/Courses";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Applications />
      <About />
      <Courses/>
    </>
  );
};

export default App;
