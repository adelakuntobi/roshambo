import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Player from './components/Player';
import Scissors from './images/icon-scissors.svg'
import Paper from './images/icon-paper.svg'
import Rock from './images/icon-rock.svg'
import Playing from './components/Playing';
export const ScoreContext = React.createContext()

function App() {
  // eslint-disable-next-line
  const [isClick, setIsClick] = useState(true);
  const [currentVal, setcurrentVal] = useState("")


  const handleClick = (value) => {
    setIsClick(false)
    setcurrentVal(value)
  }

  const changeState = () => {
    setIsClick(true)
  }


  return (
    <ScoreContext.Provider value="0">
      <div className="App my-4">
        <Header />
        {
          isClick ?
            <div className="flex flex-wrap justify-center items-center m-auto w-full md:w-10/12 lg:w-7/12 xl:w-6/12">
              <Player click={() => handleClick(1)} color="Paper" imageSrc={Paper} />
              <Player click={() => handleClick(2)} color="Scissors" imageSrc={Scissors} />
              <Player click={() => handleClick(3)} color="Rock" imageSrc={Rock} />
            </div> :
            <Playing changeState={changeState} currentVal={currentVal} />
        }
      </div>
    </ScoreContext.Provider>
  );
}


export default App;
