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
`
export const Navbar = styled.ul`
    width: 40vw;
    margin-left: 300px;
    align-items: center;
    height: 6vh;
    display: flex;
    justify-content: space-evenly;  
`
export const NavItem = styled.li`
     border-radius: 10px;
     width: 25%;
     font-size: 14px;
     text-align: center;
     /* padding: 8px; */
     :hover {
        border: 2.1px solid #f2c582;
        cursor: pointer;
    }
`
export const HeaderLogo = styled.img`
    width: 70px;
    position: fixed;
    left: 3%;
    top: 2%;
`
