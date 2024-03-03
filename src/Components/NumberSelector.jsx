import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({error, setError, selectedNumber, setSelectedNumber}) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleNumberSelector = (value) => {
    setSelectedNumber(value);
    setError("")
  }
  return (
    <NumberContainer>
        <h2>{error}</h2>
      <ButtonContainer>
        {numbers.map((value, i) => (
          <Button as="button" isSelected={value === selectedNumber} key={i} onClick={()=>handleNumberSelector(value)}>{value}</Button>
        ))}
      </ButtonContainer>
      <h1>Select Number</h1>
    </NumberContainer>
  );
}

const NumberContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "552px",
  height: "138px",
  justifyContent: "flex-end",
  alignItems: "end",
  h2 : {
    color : "red",
    marginBottom : '10px'
  }
});

const ButtonContainer = styled.div({
  display: "flex",
  gap: "24px",
  marginBottom: "20px",

  h1: {
    fontSize: "24px",
    fontWeight: "600",
  },
});

const Button = styled.div(({isSelected})=>({
    height: "72px",
    width: "72px",
    backgroundColor: isSelected ? "black" : "white",
    color: isSelected ? "white" : "black",
    fontSize: "24px",
    fontWeight: "700",
    border: "2px solid black",
  }));

export default NumberSelector;
