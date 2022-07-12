import SectionsHeader from "../SectionsHeader/styles";
import styled from "styled-components";
import * as S from "./styles";
import CoursesImg from "../../assets/imgs/formacoes.png";
import ComputerImg from "../../assets/imgs/technologies-svg.svg";
import RegularText from "../NormalText/styles";
export const CourseTitle = styled(SectionsHeader)`
  font-size: 15px;
  margin: 0 0 12px 0;
`;
export const CourseSectionTitle = styled(SectionsHeader)`
  /* position: absolute; */
  color: #0f2260;
  left: -10%;
  top: -15%;
  @media (max-width: 1024px) {
    top: 0;
  }
`;
const Courses = () => {
  return (
    <S.CoursesSection id="Formacao">
      <S.CourseCardWrapper>
        <S.ImgsWrapper>
          <S.ComputerImg src={ComputerImg} alt="" />
          <S.ComputerImg src={ComputerImg} alt="" />
        </S.ImgsWrapper>
        <S.CoursesWrapper>
          <CourseSectionTitle>Formação</CourseSectionTitle>
          <S.CourseCard>
            <CourseTitle>FRONT-END</CourseTitle>
            <RegularText>
              Quem trabalha com Front End é responsável por desenvolver por meio
              do código uma interface gráfica e, normalmente, com as tecnologias
              base da Web: HTML, CSS e JavaScript.
            </RegularText>
          </S.CourseCard>
          <S.CourseCard>
            <CourseTitle>BACK-END</CourseTitle>
            <RegularText>
              O Back-End trabalha em boa parte dos casos fazendo a ponte entre
              os dados que vem do navegador rumo ao banco de dados e vice-versa,
              sempre aplicando as devidas regras de negócio, validações e
              garantias num ambiente restrito ao usuário final (ou seja, onde
              ele não consegue acessar ou manipular algo).
            </RegularText>
          </S.CourseCard>
        </S.CoursesWrapper>
      </S.CourseCardWrapper>
      <figure>
        <S.CoursesImg
          src={CoursesImg}
          alt="imagens de editores de código, com lupa, engrenagens e itens referentes a programação"
        />
      </figure>
    </S.CoursesSection>
  );
};

export default Courses;
