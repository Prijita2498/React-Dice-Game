import React,{useState} from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function StartGame() {

    const [currentNumber, setCurrentNumber] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    const rollDice = () =>{

        if(!selectedNumber){
            setError("You have not selected any Number")
            return;
        }  

        const randomNo = generateRandomNumber(1,7);
        setCurrentNumber((prev) =>  randomNo);

        if(selectedNumber === randomNo){
            setScore((prev) => prev+randomNo)
        }
        else{
            setScore((prev) => prev);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }

  return (
    <MainContainer>
      <TopContainer>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </TopContainer>
      <RollDice className="rollDice" currentNumber={currentNumber} rollDice={rollDice} resetScore={resetScore} />
    </MainContainer>
  );
}

export default StartGame;

const MainContainer = styled.div({
  padding: "50px",
  ".rollDice": {
    display: "flex",
    alignItems : "center",
  },
});

const TopContainer = styled.div({
  display: "flex",
  height: "151px",
  justifyContent: "space-between",
});

// function StartGame() {
//   const numbers = [1, 2, 3, 4, 5, 6];
//   return (
//     <DivContainer>
//       <div>
//         <h1>0</h1>
//         <h3>Total Score</h3>
//       </div>

//       <div>
//         <ButtonSection>
//           <ButtonContainer>
//             <Button>1</Button>
//             <Button>2</Button>
//             <Button>3</Button>
//             <Button>4</Button>
//             <Button>5</Button>
//             <Button>6</Button>
//           </ButtonContainer>
//           <h4>Select Number</h4>
//         </ButtonSection>
//       </div>
//     </DivContainer>
//   );
// }

// const DivContainer = styled.div({
//   minWidth: "1280px",
//   margin: "40px",
//   display: "flex",
//   justifyContent: "space-between",
// });

// const ButtonSection = styled.div({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-end",
//   'content h4' : {
//     padding : "5px"
//   }
// });

// const ButtonContainer = styled.div({
//   display: "flex",
//   gap: "14px",
// });

// const Button = styled.button({
//   height: "72px",
//   width: "72px",
//   border: "1px solid black",
//   backgroundColor: "White",
//   color: "black",
//   fontSize: "18px",
//   fontWeight: 800,
//   "&:hover": {
//     backgroundColor: "black",
//     color: "white",
//     fontSize: "18px",
//     fontWeight: 800,
//   },
// });

// export default StartGame;
