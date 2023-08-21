import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

const Wrapper = styled.div`
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    padding: 0 16px;

    @media (min-width: ${breakpoints.mobile}) {
        max-width: 1600px;
    }
`;

export default function Container({ children }) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}
