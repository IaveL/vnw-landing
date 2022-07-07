import SectionsHeader from "../SectionsHeader/styles";
import VnwLogo from "../../assets/imgs/vnw-logo.svg";
import * as S from "./styles";

const About = () => {
  return (
    <S.About id="About">
      <figure>
        <S.AboutLogo src={VnwLogo} alt="logo vai na web, seção sobre" />
      </figure>
      <S.AboutTextContainer>
        <SectionsHeader>Sobre o Vai na Web</SectionsHeader>
        <p>
          Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e
          transformando a vida de jovens das classes C, D e E do Rio de Janeiro
          e de outros 18 estados do Brasil.
        </p>
        <p>
          Muito mais do que compartilhar conhecimento de programação front-end,
          o programa oferece aulas de inglês e desenvolvimento de habilidades
          humanas e socioemocionais, que preparam os futuros desenvolvedores
          para o mundo do trabalho e oferecem um espaço em que é possível
          descobrir a riqueza de áreas que a tecnologia tem.
        </p>
        <p>
          Com o objetivo de acentuar a potência mundial que é a juventude, o Vai
          na Web tem se tornado cada vez mais um lugar de transformação. Através
          da cultura do afeto, a equipe do programa entende que “educar não é
          impor informação, é trocar” e sua maior riqueza, segundo a
          coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da
          juventude que está nesse processo de compartilhar”.
        </p>
      </S.AboutTextContainer>
    </S.About>
  );
};
export default About;
