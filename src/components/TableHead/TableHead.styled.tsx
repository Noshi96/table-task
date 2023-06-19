import styled from 'styled-components';

export const TableHeadStyled = styled.thead`
  position: sticky;
  top: 8.5rem;
  left: 0;
  text-align: left;
  z-index: 2;

  td,
  th {
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 560px) {
    td,
    th {
      padding: 1.25rem 0.5rem;
    }
  }

  tr:first-child th:first-child {
    border-top-left-radius: 10px;
  }

  tr:first-child th:last-child {
    border-top-right-radius: 10px;
  }

  tr {
    background-color: #362f4b;
    color: #ffffff;
    box-shadow: 0 4px 2px -2px gray;
  }
`;
