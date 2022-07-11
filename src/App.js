import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Header from "./components/Header";
import Applications from "./components/Applications";
import About from "./components/About";
import Courses from "./components/Courses";
import VnwTeam from "./components/VnwTeam";
import Events from "./components/Events";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Applications />
      <About />
      <Courses />
      <VnwTeam />
      <Events />
      <Footer/>
    </>
  );
};

export default App;
