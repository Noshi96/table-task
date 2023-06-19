import { TableHead, TableRow } from 'components';
import styled from 'styled-components';

interface ITableHeadProp {
  clickedRowHeightRem: string;
}

export const TableHeadStyled = styled(TableHead)<ITableHeadProp>`
  position: sticky;
  top: calc(12.5rem + ${({ clickedRowHeightRem }) => clickedRowHeightRem});
  z-index: 1;
`;

export const TableRowStyled = styled(TableRow)<ITableHeadProp>`
  top: calc(12.5rem + ${({ clickedRowHeightRem }) => clickedRowHeightRem});
`;
