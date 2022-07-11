import React from 'react'
import styled from 'styled-components'
import SectionsHeader from "../SectionsHeader/styles"
import * as S from "./styles"
import Facebook from "../../assets/imgs/facebook.svg"
import Instagram from "../../assets/imgs/insta.svg"
import Linkedin from "../../assets/imgs/linkrdin.svg"
import Medium from "../../assets/imgs/medium.svg"
import Youtube from "../../assets/imgs/youtub.svg"
const FooterHeader = styled(SectionsHeader)`
    color: white;
`
const Footer = () => {
  return (
    <S.Footer id="Contato">
        <FooterHeader>Contato</FooterHeader>
        <S.SocialMediaWrapper>
            <S.HeadingWrapper>
            <h5>Siga nossas redes sociais e fique conectado com todas as novidades.</h5>
            </S.HeadingWrapper>
            <S.SocialMediaImg src={Facebook} alt="facebook logo" />
            <S.SocialMediaImg src={Instagram} alt="instagram logo" />
            <S.SocialMediaImg src={Linkedin} alt="linkedin logo" />
            <S.SocialMediaImg src={Medium} alt="Medium logo" />
            <S.SocialMediaImg src={Youtube} alt="youtube logo" />
        </S.SocialMediaWrapper>
    </S.Footer>
  )
}

export default Footer;