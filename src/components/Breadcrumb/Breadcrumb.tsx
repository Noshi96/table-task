import {
  BreadcrumbContainerStyled,
  BreadcrumbListStyled,
  BreadcrumbNavigationStyled,
  LiStyled,
} from './Breadcrumb.styled';

export const Breadcrumb = () => {
  return (
    <BreadcrumbContainerStyled>
      <h2>Nav</h2>
      <BreadcrumbNavigationStyled>
        <BreadcrumbListStyled>
          <LiStyled>{'Home'}</LiStyled>
          <LiStyled>{'Elizabeth Kent'}</LiStyled>
          <LiStyled>{'Flora Domestic'}</LiStyled>
        </BreadcrumbListStyled>
      </BreadcrumbNavigationStyled>
    </BreadcrumbContainerStyled>
  );
};
