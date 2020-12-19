import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { connect } from 'react-redux'


const H1 = styled.h1`
margin: 0 5px;
font-size: 65px;
line-height: 1;
color: var(--DarkText);
`

function Header(props) {
  const { human, computer } = props
  return (
    <section className="flex items-center justify-between w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 border mx-auto my-5 py-5 px-8 rounded-lg">
      <img src={logo} alt="logo" />
      <div className="rounded-md text-xl text-center bg-white py-4 px-12">
        <p className="my-0 text-blue-700">SCORE</p>
        <H1>{human} - {computer}</H1>

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


export default connect(mapStateToProps)(Header)
