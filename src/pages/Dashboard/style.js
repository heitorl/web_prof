import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const ContentSideBar = styled.div`
  height: 100%;
  backdrop-filter: blur(50px);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;

  .coll-view {
    display: flex;
    width: 100%;

    flex-direction: column;

    .bar {
      border-bottom: 1px solid var(--primary);
      width: 50%;
      padding-top: 30px;
      margin: 0 auto;
    }
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  .modal {
    top: 50%;

    position: fixed;

    z-index: 1000;
  }

  .ctn-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 120px;
    .content {
      display: flex;
      flex-direction: column;
    }

    div {
      display: flex;
      margin-top: 2px;
      div + div {
        margin-left: 20px;
      }
    }
    .custom-textfield .MuiInputBase-input {
      padding-top: 0px;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: rgb(113, 128, 150);
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
