import React from "react";
import './Potlucks.css';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
`;

const StyleP = styled.p`
    color: black;
`;

/*
const Potlucks = (props) => {
    return (
        <div className="Cards">
          <StyledH2><h2>{props.name}</h2></StyledH2>
          <StyleP><p>Date: {props.date}</p></StyleP>
          <StyleP><p>Time: {props.time}</p></StyleP>
          <StyleP><p>Location: {props.location}</p></StyleP>
        </div>
    )
}


export default Potlucks;

*/

const Characters = (props) => {
  return (
      <div className="Cards">
        <StyledH2><h2>{props.name}</h2></StyledH2>
        <StyleP><p>Gender: {props.gender}</p></StyleP>
        <StyleP><p>Birth Year: {props.birthday}</p></StyleP>
      </div>
  )
}

export default Characters;