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
    width: 100%;
    padding-top: 20px;
    flex-direction: column-reverse;
    align-items: center;
    overflow: auto;
  }

  .main {
    display: flex;
    max-width: 760px;
    width: 95%;
    box-shadow: 4px 4px 12px #c4c4c4;
    border-radius: 10px;
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
    height: 280px;
    box-shadow: lightgrey 4px 4px 10px;
    padding: 10px;
    max-width: 760px;
    width: 95%;
    background: #f8fafc;
    border-radius: 8px;
    margin-bottom: 20px;
    /* display: flex;
    box-shadow: lightgrey 4px 4px 10px;
    padding: 10px;
    width: 300px;
    height: 480px;
    background: #f8fafc;
    border-radius: 8px;
    flex-direction: column; */
    .ctn-img {
      display: flex;

      align-items: center;
      flex-direction: column;
      width: 80%;
      max-width: 270px;

      /* width: 100%; */
      img {
        border-radius: 6px;
        max-width: 100%;
        object-fit: cover;
        height: 150px;

        /* height: 210px; */
      }
    }
  }

  .ctn-description {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-weight: bold;

      /* margin-top: 10px; */
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

      /* height: 40%; */

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

  @media (min-width: 1000px) {
    .row {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 60px;
    }

    .main {
      margin-right: 8px;
    }

    .ctn-profile {
      width: 300px;
      height: 480px;
      flex-direction: column;
      margin-bottom: 0;

      .ctn-img {
        width: 100%;

        img {
          height: 210px;
        }
      }
    }
  }
`;

export const ContentSideBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    backdrop-filter: blur(50px);
  }
`;
