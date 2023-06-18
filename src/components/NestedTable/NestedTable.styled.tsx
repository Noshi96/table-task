import { TableHead, TableRow } from 'components';
import styled from 'styled-components';

interface TableHeadProp {
  clickedRowHeightRem: string;
}

export const TableHeadStyled = styled(TableHead)<TableHeadProp>`
  position: sticky;
  top: calc(
    12.5rem + ${({ clickedRowHeightRem }) => clickedRowHeightRem}
  ); // 12.5 * lvl
  z-index: 1;
  overflow: hidden;
`;

export const TableRowStyled = styled(TableRow)<TableHeadProp>`
  top: calc(12.5rem + ${({ clickedRowHeightRem }) => clickedRowHeightRem});
`;
