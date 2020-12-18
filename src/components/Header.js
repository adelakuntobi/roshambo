import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { ScoreContext } from '../App'


const H1 = styled.h1`
margin: 0 5px;
font-size: 65px;
line-height: 1;
color: var(--DarkText);
`

function Header() { 
  return (
    <section className="flex items-center justify-between w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 border mx-auto my-5 py-5 px-8 rounded-lg">
      <img src={logo} alt="logo" />
      <div className="rounded-md text-xl text-center bg-white py-4 px-12">
        <p className="my-0 text-blue-700">SCORE</p>
        <H1>0 - 0</H1>
        <ScoreContext.Consumer>
        {
          score => {
            return <div>{score}</div>
          }
        }
      </ScoreContext.Consumer>
      </div>
    </section>
  )
}

export default Header
