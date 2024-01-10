import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .coll {
    display: flex;
    flex-direction: column;

    width: 100%;

    .ctn-map {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 8px;
    }

    .ctn-form {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 1000px) {
    .coll {
      flex-direction: row;
      justify-content: center;

      .ctn-map {
        width: 50%;
        padding: 0px;
      }

      .ctn-form {
        width: 50%;
        margin-top: 70px;
        justify-content: flex-start;
      }
    }
  }
`;

export const ContainerSideBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  @media (min-width: 1000px) {
    padding: 0;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 97%;
  height: 720px;
  border-radius: 12px;

  form {
    padding: 20px;
  }

  @media (min-width: 1000px) {
  }

  .ctn-title {
    margin-top: 10px;
    padding: 18px;
    color: rgb(113, 128, 150);
    font-weight: bold;
  }

  &&& form div #ctn-input {
    padding: 15px;
  }
`;
