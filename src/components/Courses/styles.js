import styled from "styled-components";

export const CoursesSection = styled.section`
  padding-left: 0 0 0 6%;
  min-height: 100vh;
  display: flex;
  position: relative;
  @media(max-width: 425px){
    width: 100vw; 
  }
`;
export const CoursesImg = styled.img`
  width: 33vw;
  position: absolute;
  left: 65.5vw;
  top: 25vh;
  @media(max-width: 768px){
    width: 45vw;
    left: 53vw;  
    top: 35vh;
  }
  @media(max-width: 425px){
    display: none;
  }
`;
export const CourseCard = styled.article`
  margin: 50px 0 0 0;
  width: 25vw;
  @media(max-width: 425px){
   width: 100%; 
  }
`;
export const CourseCardWrapper = styled.div`
  padding: 15px;
  position: relative;
  left: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 768px){
   left: 5%; 
  }
  @media(max-width: 425px){
   width: 100%;
   left: 0; 
  }
`;
export const ComputerImg = styled.img`
  width: 5vw;
  @media(max-width: 768px){
   width: 10vw; 
  }
  @media(max-width: 425px){
   width: 15vw; 
  }
`;
export const ImgsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 50%
`;
export const CoursesWrapper = styled.div`
  padding: 1em;
`