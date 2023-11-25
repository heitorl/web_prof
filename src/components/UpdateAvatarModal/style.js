import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 10px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  flex-direction: column;

  .title {
    padding-top: 18px;
    color: rgb(105, 105, 105);
  }

  .ctn-img {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #e6f0ff;
    background-size: cover;

    width: 80%;
    height: 220px;
    border-radius: 10px;
    margin-top: 16px;
  }

  /* input {
      width: 350px;
      padding: 10px;
      border: 1px solid var(--primary);
      border-radius: 10px;
      background: ghostwhite;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

      button {
        background-color: red;
      }
    }
    button {
      width: 100px;
    } */
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  background-color: #e6f0ff;
  transition: height 0.2s ease;
  width: 80%;
  margin-top: 18px;
`;

const messageColors = {
  default: "#999",
  error: "#FF6666",
  success: "#1E90FF",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};

  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 15px 0;
`;
