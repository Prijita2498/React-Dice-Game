import React, { useState } from "react";
import styled from "styled-components";
import ShowRules from "./ShowRules";

function RollDice({ currentNumber, rollDice, resetScore }) {
    const [isVisible, setIsVisible] = useState  (false);

    const toggleRuleVisibility = () =>{
        setIsVisible(!isVisible);
    }
  return (
    <DiceContainer>
      <img
        src={`src/assets/Images/dice_${currentNumber}.png`}
        alt="dice_1"
        onClick={rollDice}
      />
      <p>Click on Dice to Roll</p>
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={toggleRuleVisibility}>{isVisible ? "Hide Rules" : "Show Rules"}</Button>
      {isVisible && <ShowRules/>}
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "36px",
  img: {
    height: "250px",
    width: "250px",
    marginBottom: "15px",
  },
  p: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
  },
});

const Button = styled.button({
  height: "44px",
  width: "220px",
  marginTop: "14px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize:"16px",
  fontWeight : "600"
});

const OutlineButton = styled(Button)({
    backgroundColor : "white",
    border : "1px solid black",
    color : 'black'
})
