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
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ContainerSideBar = styled.div`
  height: 100%;
  backdrop-filter: blur(100px);
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 650px;
  height: 720px;
  border-radius: 12px;

  .ctn-title {
    margin-top: 10px;
    padding: 18px;
    color: rgb(113, 128, 150);
    font-weight: bold;
  }
`;
