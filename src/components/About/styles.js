import styled from "styled-components"

export const About = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3em;
    min-width: 100%;
    min-height: 100vh;
    @media(max-width: 425px){
        width: 100vw;
        height: 150vh;
        padding: 0;
}
`
export const AboutLogo = styled.img`
    width: 17vw;
    @media(max-width: 768px){
        width: 25vw;
}
@media(max-width: 425px){
    display: none;   
}
`
export const AboutTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    align-items: center;
    width: 40%;
    padding: 12px;
    height: 55vh;
    @media(max-width: 1024px){
        width: 50%;
        height: 75vh;
    }
    @media(max-width: 768px){
        height: 80vh;
        width: 60vw;
}
@media(max-width: 425px){
    padding: 0;   
}
`