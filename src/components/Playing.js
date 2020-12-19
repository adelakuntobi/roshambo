import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import Player from './Player'
import Scissors from '../images/icon-scissors.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
import { connect } from 'react-redux'
import { addComputerScore, addHumanScore } from '../redux/actions/ChangeScore'
// import { useCallback } from 'react'

const Button = styled.button`
  color: var(--DarkText);
`;
const H1 = styled.h1`
  letter-spacing: 3px;
`;




function Playing(props) {
  // eslint-disable-next-line
  const { currentVal, changeState, human, computer, addHumanScore, addComputerScore } = props

  const [computerValue, setComputerValue] = useState(0)
  // eslint-disable-next-line 
  // const [computerScore, setComputerScore] = useState(0)
  // const [humanScore, setHumanScore] = useState(0)

  const [message, setMessage] = useState("")
  var day;
  const checkType = (value) => {
    switch (value) {
      case 1:
        day = "Paper";
        return Paper;
      case 2:
        day = "Scissors";
        return Scissors;
      case 3:
        day = "Rock";
        return Rock;
      default:
        day = ""
        break;
    }
  }

  const decideWinner = useCallback((computerValue) => {
    // setHumanScore(humanScore + 1)
    // setComputerScore(computerScore + 1)
    // addHumanScore()
    if (currentVal === computerValue) {
      setMessage("Draw");

    }
    if ((currentVal === 1 && computerValue === 3) || (currentVal === 2 && computerValue === 1) ||
      (currentVal === 3 && computerValue === 2)) {
      addHumanScore(human)
      setMessage("You Win")
    }
    if ((currentVal === 3 && computerValue === 1) || (currentVal === 1 && computerValue === 2) ||
      (currentVal === 2 && computerValue === 3)) {
      addComputerScore(computer)
      setMessage("You Lose")
    }
    // eslint-disable-next-line
  }, [currentVal])

  var firstShadow, secondShadow
  const sendShadow = (player) => {
    if ((player === "human") && (message === "You Win")) {
      firstShadow = "0 0 0 45px hsl(217deg 16% 45% / 48%)"
      secondShadow = "0 0 0 90px hsl(217deg 16% 45% / 22%)"
    }
    if ((player === "computer") && (message === "You Lose")) {
      firstShadow = "0 0 0 45px hsl(217deg 16% 45% / 48%)"
      secondShadow = "0 0 0 90px hsl(217deg 16% 45% / 22%)"
    }
    if (((player === "computer") && (message === "You Win")) ||
      ((player === "human") && (message === "You Lose"))) {
      firstShadow = ""
      secondShadow = ""
    }

  }


  var i = Math.floor(Math.random() * 3) + 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      decideWinner(i)
      setComputerValue(i)
    }, 500);
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <section>
      <h1 className={"text-6xl text-center uppercase my-4 z-30 " + (computerValue ? "block lg:hidden" : "hidden")}>{message}</h1>
      <section className="flex justify-between md:justify-center items-center w-full sm:w-7/12 md:w-full mx-auto">
        <div className="px-0 md:px-8">
          <H1 className="text-center uppercase text-xl lg:text-2xl my-4 z-30">You Picked</H1>
          <div className="text-4xl" onLoad={sendShadow("human")}>
            <Player width="75" height="75"
              padding="80" imageSrc={checkType(currentVal)} color={day}
              firstShadow={firstShadow} secondShadow={secondShadow}
            />
            <h1 className="text-center uppercase text-3xl my-4 z-30">{day}</h1>
          </div>
        </div>
        <div className={"z-30 " + (computerValue ? "hidden lg:block" : "hidden")}>
          <h1 className="text-6xl uppercase transform transition-all duration-1000 mb-2">{message}</h1>
          <Button onClick={changeState} className={"w-full bg-white font-normal p-3 rounded-lg text-xl uppercase"}>Play Again</Button>
        </div>

        <div className="px-0 md:px-8">
          <H1 className="text-center uppercase text-xl lg:text-2xl my-4 z-30">Computer</H1>
          <div className="text-4xl" onLoad={sendShadow("computer")}>
            <Player width="75" height="75"
              padding="80" imageSrc={checkType(computerValue)}
              color={computerValue ? day : "background"} index={computerValue ? "1" : "-1"}
              background={computerValue ? "white" : "hsl(229, 25%, 31%)"}
              firstShadow={firstShadow} secondShadow={secondShadow}
            />
            <h1 className="text-center uppercase text-3xl my-4">{computerValue ? day : "Computer"}</h1>
          </div>
        </div>
      </section>
      <div className={"z-30 mt-6 mx-auto w-11/12 md:w-5/12 text-center " + (computerValue ? "block lg:hidden" : "hidden")}>
        <Button onClick={changeState} 
        className={"w-full bg-white font-normal p-3 rounded-lg text-xl uppercase"}>
          Play Again</Button>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    human: state.score.humanScore,
    computer: state.score.computerScore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHumanScore: (score) => dispatch(addHumanScore(score)),
    addComputerScore: (score) => dispatch(addComputerScore(score)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playing)
