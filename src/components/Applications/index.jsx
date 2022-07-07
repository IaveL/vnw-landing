import React from "react";
import * as S from "./styles";
const Applications = () => {
  return (
    <S.ApplicationsContainer>
      <S.BigTextWrapper>
        <S.Annoucement>
          // Quer construir uma carreira de sucesso como desenvolvedor(a)
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
        <p style={{fontWeight: "lighter"}}>Inscrições de 02 a 21 de Agosto.</p>
      </S.ApplicationInfo>

      <S.ApplyLinkContainer>
        <h3>Link para o formulário: &nbsp;</h3>
        <S.ApplyLink>bit.ly/CarreiraVaiNaWeb</S.ApplyLink>
        </S.ApplyLinkContainer> 
    </S.ApplicationsContainer>
  );
};
export default Applications;
