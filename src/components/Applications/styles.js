import styled from "styled-components";
import ApplyBackground from "../../assets/imgs/inscricoes-background.png";
export const ApplicationsContainer = styled.section`
  min-height: 92vh;
  background-image: url(${ApplyBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
`;
export const Annoucement = styled.h1`
  font-size: 62px;
  color: #ffac2d;
  margin: 0 0 30px 0;
  font-weight: bolder;
`;
export const BigTextWrapper = styled.div`
  width: 90%;
`;
export const ApplicationInfo = styled.section`
  background-color: white;
  width: 50%;
  display: flex;
  height: 25vh;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 12px;
  padding: 12px 0 12px 12px;
`;
export const SmallCircles = styled.div`
  width: 12px;
  height: 12px;
  background-color: #00145D;
  border-radius: 50%;
`;
export const SmallCirclesWrapper = styled.div`
  width: 70px;
  justify-content: space-evenly;
  display: flex;
`;
export const Ruler = styled.div`
    width: 85%;
    margin: 15px 50px 15px 0;
    /* height: 100px; */
    border: solid #00145D;
`
export const ApplyText = styled.h2`
    color: #00145D;
    font-size: 50px;
`
export const ApplyLinkContainer = styled.section`
    display: flex;
    width: 500px;
    padding: 0.5em;
    align-items: center;
    color: #FED5B2;
`
export const ApplyLink = styled.h3`
  font-weight: lighter;
`