import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Header from "./components/Header";
import Applications from "./components/Applications";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Applications />
    </>
  );
};

export default App;
