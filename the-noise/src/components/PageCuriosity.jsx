import React from 'react'
import styled from "styled-components";

const ViewPage = styled.div`
display: flex;
justify-content: center;
align-item: center;
`

const ContainerCard = styled.div`
display: flex;
justify-content: space-evenly;
margin: 2em;
width: 1000px;
border: 1px solid #8A8A8A;
border-radius: 10px;
background-color:rgba(255, 255, 255, 0.596);
margin-top: 5em;
`

const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 400px;
font-size: 1.3em;
 `

const Frame = styled.iframe`
margin: 1em;
margin-left: -2em;
`

 const RoverName = styled.h2`
 font-size: 2.2em;
 color: none;
 text-align: center;
 margin: 0;
 `
function RoverPage() {
  return (
    <ViewPage>
    <ContainerCard>
      <Frame 
      title="curiosity"
      width="400"
      height="400"
      src="https://mars.nasa.gov/gltf_embed/24584/">
      </Frame>
      <ContainerText>
      <RoverName>Curiosity</RoverName>
      <p>Curiosity biggest dream was always to be a superstar. Of course today she's quite famous thanks to her mars mission but she always wanted to be a PopStar. Now that she's given the chance to become one she will let nobody stand in front of her dream. #TeamCuriosity</p>
       </ContainerText>
    </ContainerCard>
    </ViewPage>
  )
}

export default RoverPage