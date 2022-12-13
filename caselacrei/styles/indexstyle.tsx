import styled from 'styled-components';

export const Main = styled.div`
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
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #515151;
  max-width: 403px;
  margin-top: 32px;
  margin-bottom: 48px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 453px;
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    gap: 22px;
    justify-content: center;
  }
`;

export const Button1 = styled.button`
  width: 192px;
  height: 48px;
  background: #018762;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 2px solid #018762;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
`;
export const Button2 = styled.button`
  width: 192px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #018762;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #018762;
  cursor: pointer;
`;
