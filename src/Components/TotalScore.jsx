import React from 'react';
import styled from 'styled-components';

function TotalScore({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <h3>Total Score</h3>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div({
    display:'flex',
    flexDirection: 'column',
    width:"135px",
    height:"151px",
    alignItems:"center",
    justifyContent:"center",
    h1 : {
        fontSize:"100px",
        fontWeight:"500",
    },
    h3 : {
        fontSize:"24px",
        fontWeight:"500",
    }
});

export default TotalScore