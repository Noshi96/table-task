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
  background: #9b7cde;
`;

export const BreadcrumbNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
`;

export const BreadcrumbListStyled = styled.ul`
  display: flex;
  gap: 1rem;
  position: relative;
  flex-wrap: wrap;
`;

export const LiStyled = styled.li`
  list-style: none;
  display: inline;

  &:after {
    content: '▶';
    margin-left: 1rem;
  }
  &:last-child:after {
    content: none;
  }
`;

export const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: #aaffbb;
  }
  :focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }
  &:focus {
    outline: 1px solid #000000;
  }
`;
