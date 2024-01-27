import styled from "styled-components";

export const ChatModal = styled.div`
  position: fixed;
  bottom: 20px;
  width: 320px;
  height: 380px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  .chat-header {
    display: flex;

    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background: var(--primary);

    div {
      display: flex;
      align-items: center;

      h2 {
        padding-left: 8px;
        color: rgb(212, 212, 216);
      }
    }
    img {
      width: 30px;
      border-radius: 50%;
    }

    .close {
    }
  }

  .chat-footer {
    width: 100%;

    form {
      width: 100%;
      display: flex;
    }
    input {
      padding: 10px;
      width: 80%;
    }

    button {
      width: 20%;
      background-color: var(--primary);
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  .ctn-description {
    width: 100%;
    display: flex;

    flex-direction: column;

    padding: 7px;
    flex-direction: column;
    background: #d4d4d8;
    margin-top: 10px;
    border-radius: 8px;

    .date {
      font-size: 12px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      margin-left: 3px;
    }
  }
  .ctn-description.owner {
    justify-content: flex-end;
    text-align: right;
    background: #7dd3fc;
  }
`;
