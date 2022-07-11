import styled from "styled-components";

export const TeamCard = styled.article`
    width: 23%;
    height: fit-content;
    display: flex;
    position: relative;
    margin: 0 10px 10px 0;
    flex-direction: column;
    align-items: center;
    color: white;
    justify-content: end;
`
export const TeamMemberImg = styled.img`
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
`

export const TeamMemberName = styled.h3`
    position: absolute;
    background-color: rgba(70,130,180, 0.75);
    top: 80%;
    z-index: 1;
`

export const TeamMemberPosition = styled.p`
    background-color: rgba(70,130,180, 0.85);
    z-index: 1;
    position: absolute;
`
