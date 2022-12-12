import styled from 'styled-components';

interface styledp {
  currentPage: boolean;
}

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  background: #eeeeee;
  height: 60px;
  align-items: center;
  padding: 0 64px;
  @media screen and (max-width: 580px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    ul {
      gap: 20px;
    }
  }
`;
export const Ul = styled.ul`
  display: flex;
  gap: 40px;
`;
export const H2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #018762;
`;
export const LiS = styled.li<styledp>`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ currentPage }) => (currentPage ? '#018762' : '#1F1F1F')};
`;
