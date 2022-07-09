import React from "react";
import logo from "../../assets/imgs/logo-small-header.svg";
import * as S from "./styles";
const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo src={logo} alt="logo do vai na web" srcset="" />
      <nav>
        <S.Navbar>
          <S.NavItem><a href="#About">Sobre</a></S.NavItem>
          <S.NavItem><a href="#Formacao">Formação</a></S.NavItem>
          <S.NavItem><a href="#Equipe">Equipe</a></S.NavItem>
          <S.NavItem><a href="">Eventos</a></S.NavItem>
          <S.NavItem><a href="">Contatos</a></S.NavItem>
        </S.Navbar>
      </nav>
    </S.Header>
  );
};

export default Header;
