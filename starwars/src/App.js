
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Characters from './components/Character';



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%`
    ;

const Header = styled.h1`
    text-align: center;
    color: yellow;
    font-family: 'Orbitron', sans-serif;
    font-size: 5rem;
    width: 100%;
    background-color: black;`
    ;


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
      <Container>
        {characters.map(characters => <Characters props={characters} />)}
      </Container>
    </div>
  );
}

export default App;