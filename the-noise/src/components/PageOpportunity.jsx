import React from "react";
import styled from "styled-components";

const ViewPage = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const ContainerCard = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2em;
    width: 1000px;
    border: 1px solid #8a8a8a;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.596);
    margin-top: 5em;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 500px;
    border: 1px solid #8a8a8a;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.596);
    margin-top: 5em;
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  font-size: 1.3em;
  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

const Frame = styled.iframe`
  @media (min-width: 768px) {
    margin: 1em;
    margin-left: -2em;
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 50px;
  }
`;

const RoverName = styled.h2`
  font-size: 2.2em;
  color: none;
  text-align: center;
  margin: 0;
`;

function OpportunityPage() {
  return (
    <ViewPage>
      <ContainerCard>
        <Frame
          title="opportunity"
          width="400"
          height="400"
          src="https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true"
        ></Frame>
        <ContainerText>
          <RoverName>Opportunity</RoverName>
          <p>
            What happens to robots after they meet Opportunity? They rust in
            peace! That's what's happening to other participants. I sing as good
            as my jokes. Make some noise for #TeamOpportunity
          </p>
        </ContainerText>
      </ContainerCard>
    </ViewPage>
  );
}

export default OpportunityPage;
