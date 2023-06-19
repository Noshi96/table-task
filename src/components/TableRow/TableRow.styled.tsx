import styled from 'styled-components';

interface ITableRowIsActive {
  isActive: boolean;
}

export const TableRowStyled = styled.tr<ITableRowIsActive>`
  position: sticky;
  top: 12.5rem;
  left: 0;
  color: #000000;
  font-weight: 500;
  &:nth-child(2n) {
    background-color: #f6f6f6;
    background-color: ${({ isActive }) => (isActive ? '#aaffbb' : '#f6f6f6')};
  }
  &:nth-child(2n + 1) {
    background-color: #ffffff;
    background-color: ${({ isActive }) => (isActive ? '#aaffbb' : '#ffffff')};
  }
  cursor: pointer;
`;

export const TdStyled = styled.td`
  padding: 1rem 1.5rem;
  @media (max-width: 560px) {
    padding: 1rem 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
