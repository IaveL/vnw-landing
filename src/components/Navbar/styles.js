import styled from "styled-components"
import HeaderBackground from "../../assets/imgs/inscricoes-background.png"
export const Navbar = styled.ul`
    width: 40vw;
    margin-left: 300px;
    align-items: center;
    height: 6vh;
    display: flex;
    justify-content: space-evenly;  
    @media(max-width: 1024px){
        width: 65vw;
        font-size: 1.2em;
    }
    @media(max-width: 768px){
        width: 80vw;
}
    @media(max-width: 768px){
        display: none;
}
`

export const NavItem = styled.li`
     border-radius: 10px;
     width: 20%;
     border: solid rgba(0, 0, 0, 0);
     text-align: center;
     :hover {
        transition: border 0.3s ease-out ;
        border: 2px solid #f2c582;
        cursor: pointer;
    }
    @media(max-width: 1440px) {
        font-size: 1.2em;
    }
    @media(max-width: 768px){

    }
`

export const HamburguerMenu = styled.div`
    display: none;
    @media(max-width: 768px){
        background-image: url(${HeaderBackground});
        justify-content: center;
        align-items: center;
        display: block;
        text-align: center;
        margin: 0 0 0 100%;
        background-color: black;
        width: 30vw;
        height: 5vh;
}
`
export const NavItemDropdown = styled.li`
    font-size: 1.2em;
    :hover {
        background-color: #f2c582;
    }
`
export const NavbarDropdown = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 5;
    height: 15vh;
`

