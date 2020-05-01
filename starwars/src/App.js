
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Characters from './components/Character';



const Header = styled.h1`
text-align: center;
color: black;
font-family: 'Orbitron', sans-serif;
font-size: 50px;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => { 
    const SET_URL = "https://swapi.py4e.com/api/people/?format=json";
    axios.get(SET_URL)
      .then(function (response) {
        setCharacters(response.data.results)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, 'Could not fetch data')
      }, []);
  
})


  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <Characters data={characters} />
     
    
     
    </div>
  );
}

export default App;