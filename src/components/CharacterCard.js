import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 200px;
  background: steelblue;
  box-shadow: 2px 3px 4px 2px rgba(0,0,0,0.6);
  color: white;
  padding: 10px;
  border-radius: 15px;
  margin: 15px;
`

const DataSpan = styled.span`
  font-style: italic;
  font-weight: bold;
`

export default function CharacterCard(props) {
  return (
    <CardContainer>
      <h3>{props.name}</h3>
      <p>Dead or Alive: <DataSpan>{props.status}</DataSpan></p>
      <p>Species: <DataSpan>{props.species}</DataSpan></p>
    </CardContainer>
  );
}
