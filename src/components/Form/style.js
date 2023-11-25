import styled from "styled-components";

export const Formn = styled.form`
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 32px;
  }
  > div {
    margin-top: 14px;
    color: rgb(113, 128, 150);

    svg {
      color: var(--primary);
    }

    label {
      display: flex;

      input {
        margin-right: 2px;
      }
    }
  }
  button {
    margin-top: 20px;
  }
`;
