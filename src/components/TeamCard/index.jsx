import * as S from "./styles";

export const TeamCard = ({ name, position, picture, linkedin }) => {
  return (
    <S.TeamCard>
       <a href={linkedin} target="_blank" rel="noopener noreferrer"> <S.TeamMemberImg src={picture} alt={`Foto do colaborador(a) ${name}`} /></a>
        <S.TeamMemberName>{name}</S.TeamMemberName>
        <S.TeamMemberPosition>{position}</S.TeamMemberPosition>
    </S.TeamCard>
  );
};
