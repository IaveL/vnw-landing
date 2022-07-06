import React from "react";
import logo from "../../assets/imgs/logo-small-header.svg"
import * as S from "./styles"
const Header = () => {
    return (
        <S.Header>
            <S.HeaderLogo src={logo} alt="logo do vai na web" srcset="" />
            <nav>
                <S.Navbar>
                    <S.NavItem>Sobre</S.NavItem>
                    <S.NavItem>Formação</S.NavItem>
                    <S.NavItem>Equipe</S.NavItem>
                    <S.NavItem>Eventos</S.NavItem>
                    <S.NavItem>Contatos</S.NavItem>
                </S.Navbar>
            </nav>
        </S.Header>
    )
}

export default Header;