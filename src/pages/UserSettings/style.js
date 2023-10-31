import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;

  .content-info {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100vh;
    padding: 30px;
    margin-left: 20px;
  }

  .ctn-photo {
    width: 400px;
    border-radius: 10px;
    height: 300px;
    background-color: #ffffff;
    padding: 10px;

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
    }
  }
`;
