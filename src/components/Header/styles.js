import styled from "styled-components";
import HeaderBackground from "../../assets/imgs/inscricoes-background.png"
export const Header = styled.header`
    position: relative;
    width: 100%;
    background-image: url(${HeaderBackground});
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    height: 10vh;
    @media(max-width: 768px){
        
    }
`
export const HeaderLogo = styled.img`
    width: 70px;
    z-index: 40;
    position: fixed;
    left: 2%;
    top: 2%;
`
