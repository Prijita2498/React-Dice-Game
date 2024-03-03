import React from 'react';
import styled from 'styled-components';

function ShowRules() {
  return (
    <RuleContainer>
        <h2>How to play dice game ?</h2>
        <Rules>
            <p className='rule' >Select any number</p>
            <p className='rule' >Click on dice image</p>
            <p className='rule' >If you get wrong guess then no points will be added</p>
            <p className='rule' >After clicked on dice if selected number is equal to dice number you will get same point as dice</p>
        </Rules>
    </RuleContainer>
  )
}

export default ShowRules

const RuleContainer = styled.div({
    height:"208px",
    width : "794px",
    backgroundColor : "#FBF1F1",
    padding : "20px",
    marginTop : "10px",

    h2: {
        fontSize : "24px",
        fontWeight : "800"
    }
});

const Rules = styled.div({
    '.rule' : {
        fontSize : "16px",
        fontWeight : "400",
        lineHeight :"14px",
        marginTop :"24px"
    }
})