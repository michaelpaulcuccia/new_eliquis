import React from 'react';
import '../styles/global.css';
import Container from '../components/Container';
import Nav from '../components/Nav';
import { HeaderXL, TextHeadline, Text, Colorize } from '../components/Text';

export default function index() {
  return (
    <>
      <Container>
        <Nav />
        <HeaderXL>Header XL</HeaderXL>
        <HeaderXL><Colorize>Header XL with Color</Colorize></HeaderXL>
        <TextHeadline>Text Headline</TextHeadline>
        <Text>Text Text Text <strong>Text</strong></Text>
      </Container>
    </>
  )
}
