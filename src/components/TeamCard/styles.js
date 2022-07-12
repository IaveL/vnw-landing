import styled from "styled-components";

export const TeamCard = styled.article`
  width: 23%;
  height: fit-content;
  position: relative;
  margin: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: end;
  @media (max-width: 1440px) {
    justify-content: baseline;
  }
  @media (max-width: 1024px) {
    width: 25vw;
  }
  @media (max-width: 768px) {
    width: 35vw;
    height: 30vh;
  }
  @media(max-width: 425px){
    width: 100vw;
    margin: 40px 0 40px 0;
}
@media(max-width: 375px){
   width: 100vw;
  }
`;
export const TeamMemberImg = styled.img`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const TeamMemberName = styled.h3`
  position: absolute;
  background-color: rgba(70, 130, 180, 0.75);
  top: 78%;
  z-index: 1;
`;

export const TeamMemberPosition = styled.p`
  background-color: rgba(70, 130, 180, 0.85);
  z-index: 1;
  top: 90%;
  position: absolute;
`;
