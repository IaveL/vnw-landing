import styled from "styled-components";
import FooterBackground from "../../assets/imgs/footer-background.png"

export const Footer = styled.footer`
    color: #FFFFFF;
    background-image: url(${FooterBackground});
    padding: 0 0 0 12%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width: 1440px){
        h5{
            font-size: 1.2em;
        }
    }
    @media(max-width: 425px){
        width: 100vw;
}
`
export const SocialMediaWrapper = styled.section`
    height: 45%;
    justify-content: space-between;
    width: 40%;
    display: flex;
    @media(max-width: 1024px){
         width: 65%;   
        }
        @media(max-width: 425px){
            width: 100%;
}
`
export const HeadingWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
`
export const SocialMediaImg = styled.img`
    width: 3vw;
    @media(max-width: 425px){
        width: 8%;
}
`