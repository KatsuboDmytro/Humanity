import React from 'react'
import styled from 'styled-components';

const Slogan = styled.header`
  font-size: 4rem;
  text-align: center;
  padding: 100px 0px 50px;
`;
const Text = styled.div`
  font-size: 2rem;
  text-align: center;
`;

export const Desire = ({ text, subText, isSubText = false }) => {
  return (
    <>
      <Slogan>{text}</Slogan>
      {isSubText ? <Text>{subText}</Text> : null}
    </>
  );
}
