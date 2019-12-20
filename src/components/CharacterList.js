import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';

const CharactersContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background: #282c34;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
`

export default function CharacterList() {
  const [characterData, setCharacterData] = useState([]);
  const [activeCharacterData, setActiveCharacterData] = useState([]); //so I don't have to make another axios 
                                                                      //call to search through the data

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        // console.log(res);
        setCharacterData(res.data.results);
        setActiveCharacterData(res.data.results)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      <SearchForm 
        characterData={characterData} 
        activeCharacterData={activeCharacterData} 
        setActiveCharacterData={setActiveCharacterData} />
      <CharactersContainer>
        <CharacterCard name='This is a test' status='Alive' species='human' />
        {activeCharacterData.map(char => (
            <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} />
          ))}    
      </CharactersContainer>
    </section>
  );
}
