import styled from 'styled-components';

export const TableContainerStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  td,
  th {
    padding: 1rem 1.5rem;
  }
`;

export const NestedTableStyled = styled.table`
  position: sticky;
  top: 8.5rem;
  left: 0;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;
