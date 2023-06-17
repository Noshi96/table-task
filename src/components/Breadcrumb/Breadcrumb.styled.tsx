import styled from 'styled-components';

export const BreadcrumbContainerStyled = styled.div`
  position: sticky;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #ffffff;
  z-index: 3;
  background-color: transparent;
`;

export const BreadcrumbNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
`;

export const BreadcrumbListStyled = styled.ul`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const LiStyled = styled.li`
  list-style: none;
  display: inline;
  cursor: pointer;

  &:after {
    content: '▶';
    margin-left: 1rem;
  }
  &:last-child:after {
    content: none;
  }
`;
