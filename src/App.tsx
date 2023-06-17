import { AppStyled, GlobalStyle } from 'styles';
interface IAppProps {
  children: React.ReactNode | React.ReactNode[];
}

function App({ children }: IAppProps) {
  return (
    <>
      <GlobalStyle />
      <AppStyled>{children}</AppStyled>
    </>
  );
}

export default App;
