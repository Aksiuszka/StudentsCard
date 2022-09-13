import styled from 'styled-components';

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 1rem;

  & label {
    position: absolute;
    transform: ${({ translate, scale }) => `${translate} ${scale}`};
    transform-origin: top left;
    transition: 200ms ease all;
    color: gray;
    line-height: 1;
    left: 1.2rem;
    &:focus-within {
      transform: translate(0, 0.12rem) scale(0.8);
    }
  }
  & input {
    width: 12.2rem;
    padding: 1rem 0.7rem 0.7rem 0.7rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.primary.white};
    border: 2px solid lightgray;
    outline: none;
    color: gray;
    overflow: visible;
    line-height: 1;
    &:focus + label {
      color: gray !important;
      opacity: 1;
      transform: scale(0.55) translate3d(0, 0.5rem, 0);
    }
  }
`;
