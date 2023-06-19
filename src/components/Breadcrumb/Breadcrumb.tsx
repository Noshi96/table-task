import {
  BreadcrumbContainerStyled,
  BreadcrumbListStyled,
  BreadcrumbNavigationStyled,
  LiStyled,
} from './Breadcrumb.styled';

interface IBreadcrumbProps {
  currentClickedRows: string[];
}

export const Breadcrumb = ({ currentClickedRows }: IBreadcrumbProps) => {
  return (
    <BreadcrumbContainerStyled>
      <h2>Nav</h2>
      <BreadcrumbNavigationStyled>
        <BreadcrumbListStyled>
          <LiStyled>{'Home'}</LiStyled>
          {currentClickedRows.map(clickedRow => (
            <LiStyled>{clickedRow}</LiStyled>
          ))}
        </BreadcrumbListStyled>
      </BreadcrumbNavigationStyled>
    </BreadcrumbContainerStyled>
  );
};
