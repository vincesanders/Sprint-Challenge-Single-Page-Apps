import React, { useState } from "react";
import styled from 'styled-components';

const SearchFormContainer = styled.div`
  text-align: center;
`

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const handleInputChange = e => {
    setQuery(e.target.value);
  }
 
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
