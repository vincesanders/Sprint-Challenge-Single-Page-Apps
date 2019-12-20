import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const SearchFormContainer = styled.div`
  text-align: center;
`

export default function SearchForm(props) {
  const [query, setQuery] = useState('');
  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const characters = props.characterData.filter(char => {
      return char.name.toLowerCase().includes(query.toLowerCase());
    });
    props.setActiveCharacterData(characters);
  },[query])
 
  return (
    <SearchFormContainer>
     <form>
       <input 
        type='text' 
        onChange={handleInputChange}
        name='name' 
        placeholder='Search by name...' 
        autoComplete='off' />
     </form>
    </SearchFormContainer>
  );
}
