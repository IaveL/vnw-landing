import React from "react";
import logo from "../../assets/imgs/logo-small-header.svg";
import Navbar from "../Navbar"
import * as S from "./styles";
const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo src={logo} alt="logo do vai na web" srcset="" />
      <Navbar/>
    </S.Header>
  );
};

export default Header;
