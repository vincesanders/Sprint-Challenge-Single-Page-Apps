import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [activeCharacterData, setActiveCharacterData] = useState([]); //so I don't have to make another axios 
                                                                      //call to search through the data

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // axios.get('https://rickandmortyapi.com/api/character/')
    //   .then(res => {
    //     // console.log(res);
    //     setCharacterData(res.data.results);
    //     setActiveCharacterData(res.data.results)
    //   })
    //   .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      <CharacterCard name='This is a test' status='Alive' species='human' />
      {activeCharacterData.map(char => (
          <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} />
        ))}    
    </section>
  );
}
