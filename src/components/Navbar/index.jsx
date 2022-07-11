import React from "react";
import * as S from "./styles";
const Navbar = () => {
  return (
    <nav>
      <S.Navbar>
        <S.NavItem>
          <a href="#About">Sobre</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#Formacao">Formação</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#Equipe">Equipe</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#Eventos">Eventos</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#Contato">Contatos</a>
        </S.NavItem>
      </S.Navbar>
    </nav>
  );
};
export default Navbar;
