import styled from "styled-components";

export const Container = styled.div`
  max-width: 582px;
  width: 100%;
  height: 320px;
  display: flex;
  background-color: #ffffff;
  border-radius: 15px;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 1000px) {
    height: 460px;
    max-width: 420px;
    margin-top: 70px;
  }
  .ctn-title {
    display: flex;
    padding: 10px;
    align-items: center;
    color: #696969;

    svg {
      font-size: 25px;
      margin-left: 10px;
      color: green;
    }
  }
`;
