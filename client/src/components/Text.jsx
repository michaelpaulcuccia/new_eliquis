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

export function HeaderXL({ children, className }) {
  return (
    <HeaderXLStyles className={className}>{children}</HeaderXLStyles>
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

export function TextHeadline({ children, className }) {
  return (
    <TextHeadlineStyles className={className}>{children}</TextHeadlineStyles>
  )
}

const TextStyles = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export function Text({ children, className }) {
  return (
    <TextStyles className={className}>{children}</TextStyles>
  )
}

const ColorizeStyles = styled.span`
  color: ${pallette.orange};
`;

export function Colorize({ children, className }) {
  return (
    <ColorizeStyles className={className}>{children}</ColorizeStyles>
  )
}