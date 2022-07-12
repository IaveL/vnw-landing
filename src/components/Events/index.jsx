import TechGirls from "../../assets/imgs/techgirls.png";
import SectionsHeader from "../SectionsHeader/styles";
import styled from "styled-components";
import RegularText from "../NormalText/styles";
import * as S from "./styles"

const TechGirlsHeader = styled(SectionsHeader)`
    position: absolute;
    top: 10%;
    left: 10%;
    @media(max-width: 1024px){
     top: 20%; 
    }
    @media(max-width: 1024px){
     top: 29%; 
    }
    @media(max-width: 768px){
     top: 30%; 
    }
    @media(max-width: 425px){
     top: 25%; 
    }
    @media(max-width: 1024px){
     top: 20%; 
    }
`

const Events = () => {
  return (
    <S.TechGirlsSection id="Eventos">
        <TechGirlsHeader>Eventos</TechGirlsHeader>
      <figure>
        <S.TechGirls src={TechGirls} alt="" />
      </figure>
      <S.TechGirlsInfo>
      <SectionsHeader>Tech Girls</SectionsHeader>
      <RegularText>
        Com o objetivo de promover network entre mulheres de tecnologia,
        conectar talentos femininos com oportunidades no mercado da tecnologia,
        oferecer experiências de troca através de eventos com mulheres que já
        têm experiência no mercado da tecnologia, acelerar os talentos com ajuda
        para custeio de luz e internet para facilitar o processo de estudo,
        promover mentoria para as participantes do grupo.
      </RegularText>
      </S.TechGirlsInfo>
    </S.TechGirlsSection>
  );
};
export default Events;