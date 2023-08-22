import React from 'react';
import styled from 'styled-components';
import { pallette } from '../constants';
import { TextHeadline, Text} from './Text';

const Root = styled.div`
    background: linear-gradient(to top, #ffffff 0%, #a5a4a4 100%);
    border-bottom: solid 3px ${pallette.defaultTextBlack};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 14px 12px 14px;
    text-align: center;

    .headline {
        margin-bottom: 18px;
    }

       .text {
        margin-bottom: 18px;
    }
`;

export default function ShadedCard({
    headline,
    body
}) {
  return (
    <Root>
        <TextHeadline className='headline'>{headline}</TextHeadline>
        <Text className='text'>{body}</Text>
    </Root>
  )
}
