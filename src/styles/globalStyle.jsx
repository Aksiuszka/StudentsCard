import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
& #root{
  display: flex;
  justify-content: center;
  align-items: center;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: ${({ theme }) => theme.palette.background.mainGradient};
}`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  padding: 2rem;
`;
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 53rem;
  height: 30rem;
  margin-top: 10rem;
  border-radius: 1.5rem;
  font-family: ${({ theme }) => theme.fontFamily.main};
  background-color: ${({ theme }) => theme.palette.primary.white};
  box-shadow: ${({ theme }) => theme.extend.boxShadowing.regular};
`;
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
export const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 2.4rem;
  color: ${({ theme }) => theme.palette.text.heading};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  & span {
    color: ${({ theme }) => theme.palette.primary.green};
  }
`;
export default Global;
