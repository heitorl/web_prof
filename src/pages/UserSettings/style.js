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
    }
  }

  .ctn-map {
    width: 420px;
    height: 460px;
    display: flex;
    background-color: #ffffff;
    border-radius: 15px;
    margin-top: 70px;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
  }
`;

export const ContentRow = styled.div`
  width: 70%;
  display: flex;

  padding: 30px 30px 30px 0px;
  .containt-form {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 830px;
    background-color: rgb(255, 255, 255);
    align-items: center;
    margin: left;
    margin-left: 60px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    .title {
      color: #696969;
      padding: 20px;
    }
  }
`;
