import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Player from './components/Player';
import Scissors from './images/icon-scissors.svg'
import Paper from './images/icon-paper.svg'
import Rock from './images/icon-rock.svg'
import Playing from './components/Playing';
import styled from 'styled-components'
import editSvg from './images/edit.svg'
import rulesSvg from './images/image-rules.svg'
import { connect } from 'react-redux';
import { resetScore } from './redux/actions/ChangeScore';


const Button = styled.button`
color: hsl(230deg 49% 17%);
font-size: 1rem;
background-color: white;
margin: 1em;
padding: 0.5em 2rem;
border: 1px solid hsl(230deg 49% 17%);
border-radius: 3px;
font-weight: 400
`;

// A new component based on Button, but with some override styles
const ResetButton = styled(Button)`
background-color: hsl(230deg 49% 17%);
border-color: white;
color: white;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 90;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.8);
  }
`;

const ModalContent = styled.div`
  background-color: #fefefede;
  margin: 0 1rem;
  padding: 20px;
  p{
    font-family: 'Mountains of Christmas', cursive;
    font-weight: 700;
  }
`;

function App(props) {
  const { resetScore } = props
  const [isClick, setIsClick] = useState(true);
  const [modal, setModal] = useState(true)
  const [rules, setRules] = useState(false)
  const [currentVal, setcurrentVal] = useState("")


  const handleClick = (value) => {
    setIsClick(false)
    setcurrentVal(value)
  }

  const changeState = () => {
    setIsClick(true)
  }

  const removeModal = (e) => {
    if (e.target.id !== "tobi") {
      console.log(e.target)
      setModal(true)
    }
  }

  const setRuless = (value) => {
    setRules(value)
    setModal(false)
  }


  return (
    <div className="App my-4">
      <Header />
      {
        isClick ?
          <div>
            <div className="flex flex-wrap justify-center items-center m-auto w-full md:w-10/12 lg:w-7/12 xl:w-6/12">
              <Player click={() => handleClick(1)} color="Paper" imageSrc={Paper} />
              <Player click={() => handleClick(2)} color="Scissors" imageSrc={Scissors} />
            </div>
            <Player click={() => handleClick(3)} color="Rock" imageSrc={Rock} />
          </div> :
          <Playing changeState={changeState} currentVal={currentVal} />
      }
      {
        isClick ?
          <div>
            <ResetButton onClick={() => setRuless(false)}
              className="absolute bottom-0 right-0">Reset</ResetButton>
            <Button onClick={() => setRuless(true)} className="absolute bottom-0 left-0">Rules</Button>
          </div> : ""
      }
      {
        modal ? "" :
          <Modal onClick={(e) => removeModal(e)}>
            <ModalContent id="tobi" className="text-black p-8">
              {
                rules ?
                  <img src={rulesSvg} alt="rules" id="tobi" className="p-8 bg-white" /> : <div>
                    <img src={editSvg} alt="Edit" className="w-64 mx-auto hidden md:block" />
                    <p id="tobi" className="text-2xl md:text-3xl mt-4">Are you sure you want to reset the scores?</p>
                    <div id="tobi" className="flex justify-between items-center uppercase">
                      <ResetButton onClick={() => resetScore()} className="px-10">Yes</ResetButton>
                      <ResetButton onClick={() => setModal(true)} className="px-10">No</ResetButton>
                    </div>
                  </div>
              }
            </ModalContent>
          </Modal>
      }
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    resetScore: () => dispatch(resetScore()),
  }
}

export default connect(null, mapDispatchToProps)(App);
