import * as S from "./styles";

export const TeamCard = ({ name, position, picture }) => {
  return (
    <S.TeamCard>
      <S.TeamMemberImg src={picture} alt="" />
      <S.TeamMemberName>{name}</S.TeamMemberName>
      <S.TeamMemberPosition>{position}</S.TeamMemberPosition>
    </S.TeamCard>
  );
};
