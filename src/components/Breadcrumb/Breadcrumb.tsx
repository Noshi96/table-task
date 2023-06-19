import {
  BreadcrumbContainerStyled,
  BreadcrumbListStyled,
  BreadcrumbNavigationStyled,
  LiStyled,
  ButtonStyled,
} from './Breadcrumb.styled';

interface IBreadcrumbProps {
  currentClickedRows: string[];
  handleBreadcrumbSelect: Function;
}

export const Breadcrumb = ({
  currentClickedRows,
  handleBreadcrumbSelect,
}: IBreadcrumbProps) => {
  return (
    <BreadcrumbContainerStyled>
      <h2>Nav</h2>
      <BreadcrumbNavigationStyled>
        <BreadcrumbListStyled>
          <LiStyled>
            <ButtonStyled onClick={() => handleBreadcrumbSelect(1)}>
              {'Home'}
            </ButtonStyled>
          </LiStyled>
          {currentClickedRows.map((clickedRow, index) => (
            <LiStyled key={clickedRow}>
              <ButtonStyled onClick={() => handleBreadcrumbSelect(index + 2)}>
                {clickedRow}
              </ButtonStyled>
            </LiStyled>
          ))}
        </BreadcrumbListStyled>
      </BreadcrumbNavigationStyled>
    </BreadcrumbContainerStyled>
  );
};
