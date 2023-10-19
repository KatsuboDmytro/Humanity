import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 50px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLogo = styled.div`
  font-size: 2rem;
  `;
const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  `;
const HeaderLinks = styled.li`
  font-size: 1rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Земляни</HeaderLogo>
      <nav class="header__navbar">
        <HeaderList>
          <HeaderLinks><a href="http://localhost:3000/">Чому ми?</a></HeaderLinks>
          <HeaderLinks><a href="http://localhost:3000/">Наша команда</a></HeaderLinks>
          <HeaderLinks><a href="http://localhost:3000/">Співробітництво</a></HeaderLinks>
          <HeaderLinks><a href="http://localhost:3000/">Контакти</a></HeaderLinks>
        </HeaderList>
      </nav>
    </HeaderContainer>
  )
}
