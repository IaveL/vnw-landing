import styled from "styled-components";
import ApplyBackground from "../../assets/imgs/inscricoes-background.png";
export const ApplicationsContainer = styled.section`
  border: solid yellow;
  min-height: 87vh;
  background-image: url(${ApplyBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 100px;
`;
export const Annoucement = styled.h1`
  font-size: 35px;
  color: #ffac2d;
`;
export const BigTextWrapper = styled.div`
  width: 65%;
`;
export const ApplicationInfo = styled.section`
  background-color: white;
  width: 50%;
  display: flex;
  height: 30vh;
  flex-direction: column;
  justify-content: first baseline;
  border-radius: 12px;
  padding: 12px 0 12px 12px;
`;
export const SmallCircles = styled.div`
  width: 15px;
  height: 15px;
  background-color: #00145D;
  border-radius: 50%;
`;
export const SmallCirclesWrapper = styled.div`
  width: 70px;
  justify-content: space-evenly;
  display: flex;
`;
export const Ruler = styled.hr`
    width: 85%;
    margin: 15px 50px 0 0;
    background-color: #00145D;
`
export const ApplyText = styled.h2`
    color: #00145D;
    font-size: 2.2em;
`