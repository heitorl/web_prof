import styled, { keyframes } from "styled-components";
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerTeachers = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 50px;

  ul {
    width: 100%;
    display: flex;
    overflow-x: auto;

    animation: ${fadeInDown} 0.5s;

    li {
      display: flex;
      width: 280px;
      height: 410px;
      border-radius: 8px;
      box-shadow: 0 0 10px gray;
      flex-direction: column;

      background-color: white;
      flex: none;
      margin: 20px;

      .info {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .ctn-disc {
          display: flex;

          span {
            font-size: 14px;
            color: rgb(113, 128, 150);
          }
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        padding: 10px;

        span {
          color: #4a5568;
          font-size: 14px;

          font-family: "Roboto";
        }

        .assesment {
          display: flex;
          align-items: center;
          justify-content: space-evenly;

          svg {
            color: darkorange;
            font-size: 20px;
          }
          span {
            font-size: 15px;
            display: flex;
            align-items: center;
            font-weight: bold;
          }
          .price {
            padding: 2px;
            background: lightgreen;
            border-radius: 5px;
          }

          .map {
            display: flex;
            align-items: center;
            color: #4a5568;

            svg {
              color: var(--primary);
            }
            p {
              margin-left: 5px;
            }
          }
        }
        .ctn-button {
          width: 100px;
          display: flex;
          margin-left: 10px;
        }

        button {
          font-size: 15px;
          margin: 0px;
          height: 30px;
          font-size: 14px;
        }
      }
    }
    .ctn-img {
      display: flex;
      max-width: 252px;
      width: 100%;
      flex-direction: column;
      margin: 14px;
      align-items: center;
      height: 170px;
      img {
        border-radius: 6px;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }

    @media (min-width: 1160px) {
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      grid-row-gap: 50px;
      padding-top: 30px;
      padding-bottom: 30px;
      column-gap: 16px;
      padding-left: 12px;
      padding-right: 12px;

      li {
        max-width: 300px;
        width: 100%;
        height: 420px;
        column-gap: 20px;

        flex: auto;
        margin: 0px;
      }

      li .ctn-img {
        max-width: 300px;
        margin: 0px;
        padding-top: 6px;
      }
    }
    @media (min-width: 1620px) {
      width: 100%;
      gap: 50px 0px;

      li:nth-child(3n + 1) {
        justify-self: end;
      }

      li:nth-child(3n + 2) {
        justify-self: center;
      }

      li:nth-child(3n + 3) {
        justify-self: start;
      }

      li {
        max-width: 340px;
        width: 100%;
        height: 420px;
        column-gap: 20px;

        flex: auto;
        margin: 0px;
      }
      li .ctn-img {
        max-width: 340px;
        margin: 0px;
        padding-top: 6px;
      }
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
