import styled from 'styled-components';

export const PageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  background: #9b7cde;
`;

export const PageHeaderStyled = styled.h1`
  position: sticky;
  top: 0rem;
  left: 0;
  color: #ffffff;
  width: 100%;
  padding-top: 2rem;
  background: #9b7cde;
  z-index: 3;
`;
