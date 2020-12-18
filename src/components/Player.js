import React from 'react'
import styled from 'styled-components'

const Logo = styled.img.attrs(props => ({

}))`
  height: ${props => props.height || "50"}px;
  width: ${props => props.width || "50"}px;
  `;

const OtherDiv = styled.div`
  background-color: white;
  padding: ${props => props.padding || "60"}px;
  border-radius: 50%;
  `;

  const BorderDiv = styled.div`
  // background-color: white;
  padding: 20px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
  width: fit-content;
  background: radial-gradient(var(--${props => props.color}));
  `;
function Player(props) {
  const { color, imageSrc, click, width, height, padding } = props;


  return (
    <BorderDiv onClick={click} className="mx-10 my-2 cursor-pointer rounded-full" color={color}>
      <OtherDiv padding={padding}>
        <Logo width={width} height={height} src={imageSrc}  />
      </OtherDiv>
    </BorderDiv>
  )
}

export default Player
