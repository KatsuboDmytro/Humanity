import styled from 'styled-components';
import { AccordionItem } from './AccordionItem';
import rocket from '../../assets/rocket.png'

export const AccordionComponent = () => {
  const Aside = styled.ul`
    width: 50%;
    margin-left: 70px;
  `;
  const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Wrapper>
      <Aside>
        <AccordionItem text={'Чому саме ми маємо еволюціонувати?'} topElement={true} />
        <AccordionItem text={'Хто із землян представляє планету?'} />
        <AccordionItem text={'Що ми можемо вам запропонувати?'} />
        <AccordionItem text={'Як з нами зв’язатись?'} bottomElement={true} />
      </Aside>
      <img src={rocket} alt="rocket" />
    </Wrapper>
  );
};