import * as S from "./styles";
import styled from "styled-components";
import RegularText from "../NormalText/styles";

const ApplicationsPeriod = styled(RegularText)`
  font-size: 1.5em;
`;

const Applications = () => {
  return (
    <S.ApplicationsContainer>
      <S.BigTextWrapper>
        <S.Annoucement>
          <span>{'// '}</span>Quer construir uma carreira de sucesso como desenvolvedor(a)
          Front-End?
        </S.Annoucement>
      </S.BigTextWrapper>
      <S.ApplicationInfo>
        <S.SmallCirclesWrapper>
          <S.SmallCircles></S.SmallCircles>
          <S.SmallCircles></S.SmallCircles>
          <S.SmallCircles></S.SmallCircles>
        </S.SmallCirclesWrapper>
        <S.Ruler></S.Ruler>
        <S.ApplyText>Inscreva-se no Vai Na Web!</S.ApplyText>
        <ApplicationsPeriod>
          Inscrições de 02 a 21 de Agosto.
        </ApplicationsPeriod>
      </S.ApplicationInfo>

      <S.ApplyLinkContainer>
        <h3>Link para o formulário: &nbsp;</h3>
        <S.ApplyLink>bit.ly/CarreiraVaiNaWeb</S.ApplyLink>
      </S.ApplyLinkContainer>
    </S.ApplicationsContainer>
  );
};
export default Applications;
