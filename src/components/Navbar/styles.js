import styled from "styled-components"

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
     border: none;
     /* font-size: 14px; */
     text-align: center;
     /* padding: 8px; */
     :hover {
        transition: border 1s ease-out ;
        border: 2.1px solid #f2c582;
        cursor: pointer;
    }
`
