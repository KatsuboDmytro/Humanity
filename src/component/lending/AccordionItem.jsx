import React from 'react'
import styled from 'styled-components';
import arrow from '../../assets/arrow.png'

export const AccordionItem = ({text, topElement = false, bottomElement = false}) => {
  const AccordeonListElement = styled.li`
    font-size: 1.5rem;
    border: 2px solid white;
    display: flex;
    justify-content: space-between;
    padding: 25px 30px;
    border-top-left-radius: ${topElement ? '20px' : ''};
    border-top-right-radius: ${topElement ? '20px' : ''};
    border-bottom-left-radius: ${bottomElement ? '20px' : ''};
    border-bottom-right-radius: ${bottomElement ? '20px' : ''};
  `;  
  return (
    <AccordeonListElement>
      <span>{text}</span>
      <img src={arrow} alt="arrow" />
    </AccordeonListElement>
  );
};