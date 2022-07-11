import styled from "styled-components";
import Lupa from "../../assets/imgs/lupa.svg"
export const TeamContainerSection = styled.section`
    padding: 0 0 0 13%;
    display: flex;
    flex-direction: column;
`
export const SearchBoxSection = styled.section`
    display: flex;
    align-items: center;
    margin: 15px 0 15px;
    padding-left: 15%;
    width: 71vw;
    background-color: #0F2260;
    height: 15vh;
`
export const TeamMembersSection = styled.section`
    width: 75vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
`
export const SearchInput = styled.input`
    background-color: inherit;
    border-radius: 4px;
    border: solid 1px white;
    padding: .2em;
    color: white;
    background-image: url(${Lupa});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    ::placeholder {
        color: white;
        font-style: italic;
        font-size: 1.2em;
    }
`