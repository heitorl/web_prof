import styled from "styled-components";

export const Formn = styled.form`
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 32px;
  }
  > div {
    margin-top: 14px;
  }

  .my-disc {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    h3 {
      color: rgb(105, 105, 105);
      margin-bottom: 10px;
      text-align: left;
      width: 100%;
    }
  }

  .check-disc {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    h3 {
      color: rgb(105, 105, 105);

      text-align: left;
      width: 100%;
    }
  }
`;
