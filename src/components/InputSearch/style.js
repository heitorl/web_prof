import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  flex-direction: column;

  svg {
    color: var(--primary);
  }

  span {
    color: var(--primary);
  }

  .btn-submit {
    margin-top: 10px;
    width: 120px;
    height: 38px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    .btn-submit {
      width: 100px;
      margin-left: 12px;
      margin-top: 4px;
      height: 45px;
    }
  }
`;

export const ClearButton = styled.button``;
