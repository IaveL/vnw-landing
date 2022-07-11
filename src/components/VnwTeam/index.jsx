import React, { useState, useEffect } from "react";
import { TeamCard } from "../TeamCard";
import vnwTeam from "./vnwTeam";
import * as S from "./styles";
import SectionsHeader from "../SectionsHeader/styles";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    setTeam(vnwTeam);
  }, []);

  const [searchResult, setSearchResult] = useState(vnwTeam);

  const handleSearch = (e) => {
    const query = e.target.value;
    if (query !== "") {
      const results = team.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResult(results);
    } else {
      setSearchResult(team);
    }
  };

  return (
    <S.TeamContainerSection id="Equipe">
      <SectionsHeader>Equipe</SectionsHeader>
      <S.SearchBoxSection>
        <S.SearchInput onChange={(e) => {handleSearch(e);}}
          type="text"
          placeholder="Pesquisar..."
        />
      </S.SearchBoxSection>
      <S.TeamMembersSection>
        {searchResult.map(item => (
          <TeamCard
            key={item.id}
            name={item.name}
            linkedin={item.linkedin}
            position={item.position}
            picture={item.picture}
          />
        ))}
      </S.TeamMembersSection>
    </S.TeamContainerSection>
  );
};

export default Team;
