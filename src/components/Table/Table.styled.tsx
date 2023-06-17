import styled from 'styled-components';

export const TableContainerStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  position: relative;

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const NestedTableStyled = styled.table`
  position: relative;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;
