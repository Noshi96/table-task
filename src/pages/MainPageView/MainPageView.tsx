import { PageContainerStyled, PageHeaderStyled } from './MainPageView.styled';
import { TableController } from 'controllers';

export const MainPageView = () => {
  return (
    <PageContainerStyled>
      <PageHeaderStyled>Click the author</PageHeaderStyled>
      <TableController />
    </PageContainerStyled>
  );
};
