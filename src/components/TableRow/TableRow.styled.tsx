import styled from 'styled-components';

export const TableRowStyled = styled.tr`
  position: sticky;
  top: 12.5rem;
  left: 0;
  color: #000000;
  font-weight: 500;
  &:nth-child(2n) {
    background-color: #f6f6f6;
  }
  &:nth-child(2n + 1) {
    background-color: #ffffff;
  }
  cursor: pointer;
`;

export const TdStyled = styled.td`
  padding: 1rem 1.5rem;
`;
