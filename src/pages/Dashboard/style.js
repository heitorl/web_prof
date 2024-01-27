import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const ContentSideBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  @media (min-width: 1000px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
    width: 90%;
    overflow: hidden;
  }

  .main .coll-view {
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;
    padding-bottom: 66px;

    .bar {
      border-bottom: 1px solid var(--primary);
      width: 75%;
      padding-top: 30px;
      margin: 0 auto;
    }
  }

  .main .ctn-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    padding-right: 15px;

    /*  */
    z-index: 1000;
    .bar {
      border-bottom: 1px solid var(--primary);
      width: 75%;
      padding-top: 30px;
      margin: 0 auto;
    }

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
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 5px;
      color: #52525b;
      font-family: roboto;
    }
  }

  @media (min-width: 1000px) {
    height: 100%;
    overflow-y: hidden;
    .main {
      width: 100%;
    }
    .main .ctn-title {
      height: 120px;
      width: 100%;
      padding-right: 0px;
    }
    .main .ctn-title .content {
      span {
        font-size: 1.5rem;
      }
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
