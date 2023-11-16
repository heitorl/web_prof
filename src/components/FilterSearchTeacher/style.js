import styled from "styled-components";

export const ContainerTeachers = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 50px;

  ul {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 50px;
    padding-top: 30px;

    li {
      width: 340px;
      display: flex;

      height: 420px;
      border-radius: 8px;
      box-shadow: 0 0 10px gray;
      flex-direction: column;
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
      max-width: 300px;
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
  }
`;
