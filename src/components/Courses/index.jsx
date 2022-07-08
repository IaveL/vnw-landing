import SectionsHeader from "../SectionsHeader/styles";
import styled from "styled-components";
import * as S from "./styles";
import CoursesImg from "../../assets/imgs/formacoes.png";
import ComputerImg from "../../assets/imgs/technologies-svg.svg";

export const CourseTitle = styled(SectionsHeader)`
  font-size: 15px;
  margin: 0 0 12px 0;
`;
export const CourseSectionTitle = styled(SectionsHeader)`
    position: relative;
    color: #0F2260;
    left: 10vw;
    top: 15vh;

`
const Courses = () => {
  return (
    <S.CoursesSection id="Formacao">
      <CourseSectionTitle>Formação</CourseSectionTitle>
      <S.ImgsWrapper>
        <S.ComputerImg src={ComputerImg} alt="" />
        <S.ComputerImg src={ComputerImg} alt="" />
      </S.ImgsWrapper>
      <S.CourseCardWrapper>
        <S.CourseCard>
          <CourseTitle>FRONT-END</CourseTitle>
          <p>
            Quem trabalha com Front End é responsável por desenvolver por meio
            do código uma interface gráfica e, normalmente, com as tecnologias
            base da Web: HTML, CSS e JavaScript.
          </p>
        </S.CourseCard>
        <S.CourseCard>
          <CourseTitle>BACK-END</CourseTitle>
          <p>
          O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).
          </p>
        </S.CourseCard>
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
