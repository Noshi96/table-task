import styled from 'styled-components';

export const TableContainerStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  position: relative;
  table-layout: fixed;
  display: table;

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
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  display: table;

  /* @media (max-width: 765px) {
    thead tr th:nth-child(2),
    tr td:nth-child(2) {
      display: none;
    }
  } */
`;
