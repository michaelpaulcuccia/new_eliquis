import React from 'react';
import '../styles/global.css';
import styled from 'styled-components';
import Container from '../components/Container';
import Nav from '../components/Nav';
import { HeaderXL, Colorize } from '../components/Text';
import ShadedCard from '../components/ShadedCard';
import { breakpoints } from '../constants';

const FlexContainer = styled.div`
  margin: 16px 0;
  gap: 8px;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    margin: 32px 0;
    gap: 10px;
  } 
`;

export default function index() {
  return (
    <>
      <Container>
        <Nav />
        <div style={{textAlign: "center", margin: "32px 0 18px 0"}}>
          <HeaderXL>HOW CAN <Colorize>ELIQUIS</Colorize> HELP YOU?</HeaderXL>
        </div>
        <FlexContainer>
          <ShadedCard 
            headline='Reduce the Risk of Stroke Due to Nonvalvular Atrial Fibrillation (AFib)'
            body='For patients with AFib, a type of irregular heartbeat, not caused by a heart valve problem'
          />
          <ShadedCard 
            headline='Treat Blood Clots In the Veins of the Legs/Lungs & Reduce Risk of it Occurring Again'
            body='For patients with deep vein thrombosis (DVT)or pulmonary embolism (PE)'
          />
          <ShadedCard 
            headline='Reduce the Risk of Stroke Due to Nonvalvular Atrial Fibrillation (AFib)'
            body='For patients who have had hip or knee replacement surgery'
          />
        </FlexContainer>
      </Container>
    </>
  )
}
