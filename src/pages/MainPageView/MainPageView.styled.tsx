import styled from 'styled-components';

export const PageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-image: linear-gradient(
    to right top,
    #4458ce,
    #4c68d5,
    #5677da,
    #6386df,
    #7195e3,
    #7a96e5,
    #8397e7,
    #8c98e8,
    #978ae4,
    #a67adc,
    #b668d0,
    #c551bf
  );
`;

export const PageHeaderStyled = styled.h1`
  position: sticky;
  top: 2rem;
  left: 0;
  color: #ffffff;
  width: 100%;
`;
