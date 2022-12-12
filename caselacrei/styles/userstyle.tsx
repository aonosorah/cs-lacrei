import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 64px 64px 16px;
  @media screen and (max-width: 580px) {
    padding: 20px;
    .mobile {
      display: none;
    }
  }
`;
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  max-width: 453px;
  color: #1f1f1f;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #515151;
  border-left: 5px #018762 solid;
  padding-left: 24px;
  margin-top: 32px;
  max-width: 550px;
`;
