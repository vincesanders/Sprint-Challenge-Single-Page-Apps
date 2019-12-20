import React from "react";
import styled from 'styled-components';


const MainImg = styled.img`
  display: block;
  border-radius: 100%;
  margin: 0 auto;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
      <h1>Welcome to the ultimate fan site!</h1>
        <MainImg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
