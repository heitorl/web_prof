import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 12px;

  svg {
    color: rgb(113, 128, 150);
  }

  span {
    color: var(--primary);
  }

  .btn-submit {
    margin-left: 12px;
    margin-top: 4px;
    width: 100px;
  }
`;

export const ClearButton = styled.button``;
