import styled from "styled-components";
import FooterBackground from "../../assets/imgs/footer-background.png"

export const Footer = styled.footer`
    color: #FFFFFF;
    background-image: url(${FooterBackground});
    padding: 0 0 0 12%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
`
export const SocialMediaWrapper = styled.section`
    height: 45%;
    justify-content: space-between;
    width: 40%;
    display: flex;
`
export const HeadingWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
`
export const SocialMediaImg = styled.img`
    width: 3vw;
`