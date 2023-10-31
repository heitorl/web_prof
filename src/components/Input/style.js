import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: #c53030;
    }
  }
`


export const InputContainer = styled.div`

  background-color: var(--white);
  border-radius: 10px;
  border: 2px solid #A9A9A9;
  color: var(--black);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.5s;

  ${(props) => props.isErrored && css`
      border-color: #c53030;
      svg {
        color: #c53030; 
      }
    `
  }

  input{
    background: transparent;
    flex: 1;
    align-items: center;
    border: 0;
    color: var(--black);
    &::placeholder{
      color: gray
    }
  }

  svg{
    margin-right: 14px;
  }
`