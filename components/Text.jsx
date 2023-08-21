import React from 'react';
import styled from 'styled-components';
import { breakpoints, pallette } from '../constants';

const HeaderXLStyles = styled.p`
  font-weight: 900;
  font-size: 25px;
    line-height: 29px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 36px;
    line-height: 40px;
  }    
`;

export function HeaderXL({ children }) {
  return (
    <HeaderXLStyles>{children}</HeaderXLStyles>
  )
}

const TextHeadlineStyles = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 28px;
    line-height: 32px;
  } 
`;

export function TextHeadline({ children }) {
  return (
    <TextHeadlineStyles>{children}</TextHeadlineStyles>
  )
}

const TextStyles = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export function Text({ children }) {
  return (
    <TextStyles>{children}</TextStyles>
  )
}

const ColorizeStyles = styled.span`
  color: ${pallette.orange};
`;

export function Colorize({ children }) {
  return (
    <ColorizeStyles>{children}</ColorizeStyles>
  )
}