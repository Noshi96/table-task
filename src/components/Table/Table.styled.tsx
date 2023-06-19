import styled from 'styled-components';

export const TableContainerStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  position: relative;
  table-layout: fixed;
  display: table;
  width: 100%;

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 560px) {
    td,
    th {
      font-size: 0.875em;
    }
  }
`;

export const NestedTableStyled = styled.table`
  position: relative;
  display: table;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
`;
