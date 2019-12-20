import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

//TODO: change styling of button


const MainImg = styled.img`
  display: block;
  border-radius: 100%;
  margin: 0 auto;
`

export default function WelcomePage() {
  const history = useHistory();
  const routeToCharacterList = () => {
    history.push('/character-list');
  }
  
  return (
    <section className="welcome-page">
      <header>
      <h1>Welcome to the ultimate fan site!</h1>
        <MainImg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <button onClick={routeToCharacterList}>Character List</button>
      </header>
    </section>
  );
}
