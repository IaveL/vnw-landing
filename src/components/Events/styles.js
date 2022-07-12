import styled from "styled-components";

export const TechGirlsSection = styled.section`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  padding: 0 0 0 6%;

  @media (max-width: 425px) {
    padding: 0;
    justify-content: center;
  }
`;

export const TechGirls = styled.img`
  width: 60vw;
  @media (max-width: 425px) {
    display: none;
  }
`;
export const TechGirlsInfo = styled.aside`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
  @media (max-width: 1440px) {
    margin: 0 0 0 2em;
    height: 45vh;
    width: 20vw;
  }
  @media (max-width: 1024px) {
    width: 25vw;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
