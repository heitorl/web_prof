import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  width: 80%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-right: 10px;
`;
