import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

//TODO: change styling of button


const MainImg = styled.img`
  display: block;
  border-radius: 100%;
  margin: 0 auto;
`

const CharacterListButton = styled.button`
  margin: 0 8px;
  margin-top: -125px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #fff;
  background-color: #1c5d76;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
`

const WelcomePageHeader = styled.header`
  text-align: center;
`

export default function WelcomePage() {
  const history = useHistory();
  const routeToCharacterList = () => {
    history.push('/character-list');
  }

  return (
    <section className="welcome-page">
      <WelcomePageHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainImg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <CharacterListButton onClick={routeToCharacterList}>Character List</CharacterListButton>
      </WelcomePageHeader>
    </section>
  );
}
