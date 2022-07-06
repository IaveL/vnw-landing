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
        <S.Ruler />
        <S.ApplyText>Inscreva-se no Vai Na Web!</S.ApplyText>
        <h3>Inscrições de 02 a 21 de Agosto.</h3>
      </S.ApplicationInfo>
    </S.ApplicationsContainer>
  );
};
export default Applications;
