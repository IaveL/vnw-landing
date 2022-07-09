import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Header from "./components/Header";
import Applications from "./components/Applications";
import About from "./components/About";
import Courses from "./components/Courses";
import VnwTeam from "./components/VnwTeam";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Applications />
      <About />
      <Courses/>
      <VnwTeam/>
    </>
  );
};

export default App;
