import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 800px;

  padding: 20px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;
  border-radius: 20px;
  .main {
    width: 100%;
    display: flex;

    .box-resume {
      width: 80%;
      display: flex;
      flex-direction: column;
    }

    .ctn-profile {
      display: flex;
      width: 30%;
      height: 520px;
      box-shadow: 4px 4px 10px lightgrey;
      padding: 10px;
    }

    .ctn-description {
      width: 100%;
      display: flex;

      .ctn-img {
        height: 100%;
        display: flex;
        -webkit-box-pack: center;
        align-items: center;
        /* justify-content: center; */
        /* width: 100%; */
        flex-direction: column;
        img {
          border-radius: 6px;
          width: 240px;
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
  }
`;
