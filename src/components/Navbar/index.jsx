import React, { useState } from "react";
import * as S from "./styles";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

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
      <S.HamburguerMenu onClick={() => {setDropDown(!dropDown);}}>
        Itens de Navegação
        {dropDown && (
          <S.NavbarDropdown>
            <S.NavItemDropdown>
              <a href="#About">Sobre</a>
            </S.NavItemDropdown>
            <S.NavItemDropdown>
              <a href="#Formacao">Formação</a>
            </S.NavItemDropdown>
            <S.NavItemDropdown>
              <a href="#Equipe">Equipe</a>
            </S.NavItemDropdown>
            <S.NavItemDropdown>
              <a href="#Eventos">Eventos</a>
            </S.NavItemDropdown>
            <S.NavItemDropdown>
              <a href="#Contato">Contatos</a>
            </S.NavItemDropdown>
          </S.NavbarDropdown>
        )}
      </S.HamburguerMenu>
    </nav>
  );
};
export default Navbar;
