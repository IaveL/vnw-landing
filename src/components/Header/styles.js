import styled from "styled-components";
import HeaderBackground from "../../assets/imgs/inscricoes-background.png"
export const Header = styled.header`
    position: relative;
    width: 100%;
    background-image: url(${HeaderBackground});
    display: flex;
    justify-content: space-evenly;
    border: solid red;
    color: white;
    height: 13vh;
`
export const Navbar = styled.ul`
    border: solid yellow;
    width: 40vw;
    margin-left: 300px;
    align-items: center;
    height: 6vh;
    display: flex;
    justify-content: space-evenly;  
`
export const NavItem = styled.li`
     border-radius: 10px;
     font-weight: lighter;
     width: 25%;
     text-align: center;
     /* padding: 8px; */
     :hover {
        border: 2.1px solid #f2c582;
    }
`
export const HeaderLogo = styled.img`
    width: 70px;
    position: fixed;
    left: 3%;
    top: 2%;
`