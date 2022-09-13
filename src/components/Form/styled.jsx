import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 2rem;
`;

export const Button = styled.button`
  width: 28.8rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-left: 1.7rem;
  margin-top: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.purple};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.primary.white};
`;
