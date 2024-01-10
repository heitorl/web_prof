import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const ContentTest = styled.div`
  padding: 12px;
`;

export const ContainerSideBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  @media (min-width: 1000px) {
    padding: 0;
  }
`;

export const ContentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  .item {
  }

  .content-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 12px;
    /* padding: 30px; */

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
    }
  }

  .ctn-photo {
    max-width: 420px;
    width: 100%;
    border-radius: 10px;
    height: 300px;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    .title {
      display: flex;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;

      h3 {
        margin-right: 20px;
        color: #696969;
      }

      svg {
        font-size: 22px;
        color: var(--primary);
      }
    }
  }

  .photo {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 240px;
    img {
      width: 85%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }

    svg {
      position: absolute;
      font-size: 50px;
      bottom: 0;
      right: 0;
      margin: 0px 5px;
      color: var(--primary);
      cursor: pointer;
    }
  }

  .containt-form {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 420px;
    height: 800px;
    width: 95%;

    padding: 12px;
    background-color: rgb(255, 255, 255);
    align-items: center;
    /* margin-left: 60px; */
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    .title {
      color: #696969;
      padding: 20px;
      margin-top: 30px;
    }

    form {
      padding-top: 10px;
      width: 92%;
      button {
        margin-top: 30px;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    padding-top: 80px;

    .content-info {
      width: 40%;
      padding: 0px;
      height: 100%;
    }

    .content-form {
      width: 60%;
      padding: 0px;
      max-width: 550px;
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

export const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
