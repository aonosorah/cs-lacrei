import styled from 'styled-components';

interface styledp {
  currentPage: boolean;
}

export const FooterS = styled.footer`
  border-top: 1px #b0e0d3 solid;
  margin: 0 64px;
  @media screen and (max-width: 580px) {
    margin: 20px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  gap: 40px;
`;
export const Li = styled.li<styledp>`
  list-style: none;
  font-weight: ${({ currentPage }) => (currentPage ? '700' : '400')};
`;
export const UlImg = styled.ul`
  display: flex;
  height: 24px;
  gap: 41px;
`;

export const LiImg = styled.li`
  list-style: none;
`;
export const Section = styled.section`
  margin: 28.5px 0;
`;
export const Nav = styled.nav`
  margin-top: 32px;
`;
export const Span = styled.span`
  color: #515151;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
`;
