import React, {useState, useEffect} from 'react';
//import './App.css';
import axios from 'axios';
import Characters from './PotlucksCards';
import styled from "styled-components";
//import Potlucks from './PotlucksCards';
//import { Col, Row, Container } from "reactstrap";

const CharCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;


const App = () => {


  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('Sorry! There is an error in the API request!')})
  }


  useEffect(fetchData, [page])

  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">While you're waiting for your potluck, feel free to brush up on StarWars trivia!</h1>
      <CharCard>
        {data.map((starwars, index) => {
          return <
            Characters 
            name={starwars.name} 
            key={index} 
            birthday={starwars.birth_year} 
            gender={starwars.gender}
            />
        })}
      </CharCard>
      <div className="Buttons">
        <button className="Back" onClick={() => setPage(page - 1)}>Back</button>

        <button className="Next" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;

