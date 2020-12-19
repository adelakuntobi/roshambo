import React from 'react'
import styled from 'styled-components'

const Logo = styled.img.attrs(props => ({

}))`
  height: ${props => props.height || "50"}px;
  width: ${props => props.width || "50"}px;
  position: relative;
  z-index: ${props => props.index || "1"};
  `;

const OtherDiv = styled.div`
  background-color: ${props => props.background || "white"};
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
  box-shadow: ${props => props.firstShadow || "none"};
  `;

const BoxShadow = styled.div`
  box-shadow: ${props => props.secondShadow || "none"};
  border-radius: 50%;
  `;
function Player(props) {
  const { color, imageSrc, click, width, height,
    padding, background, index, firstShadow, secondShadow } = props;


  return (
    <div className="mx-10 my-2 ">
      <BoxShadow secondShadow={secondShadow}>
        <BorderDiv firstShadow={firstShadow} onClick={click} className="cursor-pointer rounded-full" color={color}>
          <OtherDiv padding={padding} background={background}>
            <Logo index={index} width={width} height={height} src={imageSrc} />
          </OtherDiv>
        </BorderDiv>
      </BoxShadow>
    </div>
  )
}

export default Player
