import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;

  .row {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 60px;
  }

  .main {
    display: flex;
    width: 60%;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    background: rgb(248, 250, 252);

    .editor {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .box-resume {
      width: 80%;

      span {
        text-align: center;
        font-weight: bold;
        font-size: 22px;
      }
    }
  }
  .ctn-profile {
    display: flex;
    height: 520px;
    box-shadow: lightgrey 4px 4px 10px;
    padding: 10px;
    width: 300px;
    background: #f8fafc;
    border-radius: 8px;
  }

  .ctn-description {
    width: 100%;
    display: flex;
    justify-content: center;

    .ctn-img {
      height: 100%;
      display: flex;

      align-items: center;
      flex-direction: column;
      width: 100%;
      img {
        border-radius: 6px;
        max-width: 100%;
        object-fit: cover;
        height: 210px;
      }
      p {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 10px;
      }

      .star {
        display: flex;
        align-items: center;
        margin: 8px 10px;
        svg {
          color: darkorange;
          font-size: 24px;
        }
        span {
          font-size: 15px;
          margin-left: 3px;
          font-weight: bold;
          color: #4a5568;
        }
      }
      .info-price {
        font-size: 16px;
        font-weight: bold;
        color: rgb(74, 85, 104);
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 40%;

        div {
          display: flex;
          margin-top: 20px;
          justify-content: space-around;
        }
      }

      .ctn-button {
        height: 100%;
        width: 180px;
        display: flex;
        align-items: center;
        button {
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            height: 100%;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

export const ContentSideBar = styled.div`
  height: 100%;
  backdrop-filter: blur(50px);
`;
