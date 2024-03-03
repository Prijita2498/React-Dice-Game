import React from "react";
import styled from "styled-components";
import dices1 from './../assets/Images/dices1.png'

const MainContainer = styled.div({
    display:"flex",
    margin : 'auto',
    maxWidth:'1180px',
    alignItems : 'center',
    height: '100vh',
    justifyContent: 'space-between'
});

const RightDiv = styled.div({
    display:"flex",
    flexDirection:"column",
    alignItems: "end"
});

const Title = styled.h1({
    fontSize:"96px",
    fontWeight:'800',
    whiteSpace: 'nowrap'
});

const Button = styled.button({
    backgroundColor: "black",
    color: "white",
    height: "44px",
    width: "220px",
    borderRadius : "5px",
    border:'none',
    fontSize: '16px',
    float:'right',
    '&:hover' : {
        backgroundColor: 'white',
        border: "1px solid black",
        color : 'black',
        fontSize:'16px',
        fontWeight:600
    }

});



function HomePage({onClick}) {
  return (
    <MainContainer>
        <img src={dices1} alt="logo"/>
      <RightDiv>
        <Title>DICE GAME</Title>
        <Button onClick={onClick}>Play Game</Button>
      </RightDiv>
    </MainContainer>
  );
}

export default HomePage;
