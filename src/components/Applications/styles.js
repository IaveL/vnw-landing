import styled from "styled-components";
import ApplyBackground from "../../assets/imgs/inscricoes-background.png";
export const ApplicationsContainer = styled.section`
  min-height: 92vh;
  z-index: 0;
  background-image: url(${ApplyBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const Annoucement = styled.h1`
  font-size: 62px;
  color: #ffac2d;
  margin: 0 0 30px 0;
  font-weight: bolder;
  @media(max-width: 1024px){
    font-size: 50px;
  }
  @media(max-width: 425px){
   font-size: 2em; 
  }
`;
export const BigTextWrapper = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  width: 90%;
  @media(max-width: 768px){
    top: 15%;
  }
`;
export const ApplicationInfo = styled.section`
  background-color: white;
  width: 50%;
  display: flex;
  height: 25vh;
  position: absolute;
  left: 8%;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 12px;
  padding: 12px 0 12px 12px;
    @media(max-width: 1440px){
      width: 60%;
      top: 40%;
    }
    @media(max-width: 1024px){
      width: 80%;
      top: 40%;
    }
    @media(max-width: 768px){
    top: 48%;
  }
  @media(max-width: 425px){
    font-size: 1em; 
    height: 40vh;
    left: 0%;
  }
  @media(max-width: 425px){
    width: 100%;
  }
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
    @media(max-width: 425px){
    
  }
`
export const ApplyLinkContainer = styled.section`
    position: absolute;
    left: 8%;
    top: 63%;
    display: flex;
    width: 500px;
    padding: 0.5em;
    align-items: center;
    color: #FED5B2;
    @media(max-width: 1440px){
      top: 70%;
    }
    @media(max-width: 768px){
   top: 75%; 
  }
  @media(max-width: 425px){
  top: 92%;
  left: 0; 
  font-size: 0.85em;
  }
  @media(max-width: 375px){
    width: 100%;
  }
`
export const ApplyLink = styled.h3`
  font-weight: lighter;
`