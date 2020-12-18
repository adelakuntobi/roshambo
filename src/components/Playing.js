import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Player from './Player'
import Scissors from '../images/icon-scissors.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
// import useLocalStorage from '../useLocalStorage';
import { ScoreContext } from '../App'
import { connect } from 'react-redux'

const Button = styled.button`
  color: var(--DarkText);
`;
const H1 = styled.h1`
  letter-spacing: 3px;
`;




function Playing(props) {
  const { currentVal, changeState } = props

  const [computerValue, setComputerValue] = useState(0)

  const [computerScore, setComputerScore] = useState(0)
  const [humanScore, setHumanScore] = useState(0)

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

  // var score;
  const decideWinner = () => {
    if (currentVal === computerValue) {
      setMessage("Draw");
    }
    if ((currentVal === 1 && computerValue === 3) || (currentVal === 2 && computerValue === 1) ||
    (currentVal === 3 && computerValue === 2)) {
      setMessage("You Win")
    }
    if ((currentVal === 3 && computerValue === 1) || (currentVal === 1 && computerValue === 2) ||
    (currentVal === 2 && computerValue === 3)) {
      setMessage("You Lose")
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setComputerValue(2), 500);
    decideWinner()
    console.log(computerScore, humanScore)
    return () => clearTimeout(timer);
  }, [computerValue, setComputerValue]);

  return (
    <section className="flex justify-center items-center w-full mx-auto">
      <div>
        <H1 className="text-center uppercase text-2xl my-4">You Picked</H1>
        <div className="text-4xl">
          <Player width="75" height="75" padding="80" imageSrc={checkType(currentVal)} color={day} />
          <h1 className="text-center uppercase text-3xl my-4">{day}</h1>
        </div>
      </div>
      <div className={computerValue ? "block" : "hidden"}>
        <h1 className="text-6xl uppercase transform transition-all duration-1000">{message}</h1>
        <Button onClick={changeState} className={"w-full bg-white font-normal p-3 rounded-lg text-xl uppercase"}>Play Again</Button>
      </div>

      <div>
        <H1 className="text-center uppercase text-2xl my-4">The House Picked</H1>
        <div className="text-4xl">
          <Player width="75" height="75" padding="80" imageSrc={checkType(computerValue)} color={day} />
          <h1 className="text-center uppercase text-3xl my-4">{day}</h1>
        </div>
      </div>
      <ScoreContext.Consumer>
        {
          score => {
            return <div>{score}</div>
          }
        }
      </ScoreContext.Consumer>
    </section>
  )
}

export default Playing
