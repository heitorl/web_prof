import styled from "styled-components";

export const Container = styled.div`
  width: 50px;

  background-color: #3a444d;
  height: 610px;
  border-radius: 10px;

  @media (min-width: 1000px) {
    width: 280px;
    display: flex;
    justify-content: center;
    height: 100%;
    border-radius: 0;
  }
`;

export const ContentGeral = styled.div`
  margin-top: 20px;

  span {
    display: none;
  }

  .ctn-title {
    display: none;
  }

  .ctn-logo {
    padding-top: 50px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    svg {
      color: #f4f4f5;
      font-size: 28px;
      font-weight: bold;
    }
  }

  @media (min-width: 1000px) {
    span {
      display: block;
    }

    .ctn-logo {
      display: none;
    }

    .ctn-title {
      display: block;
    }

    svg {
      margin-right: 15px;
    }
  }

  .bar {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border-bottom: 1px solid var(--primary);
    @media (min-width: 1000px) {
      width: 100%;
    }
  }
  .ctn-title {
    padding-top: 70px;
    span {
      color: #f4f4f5;
      font-size: 28px;
      font-weight: bold;
    }
  }

  .ctn-links > div {
    padding-top: 20px;
  }
  .ctn-links {
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    font-size: 28px;
    color: var(--secondary);
    @media (min-width: 1000px) {
      padding-top: 20px;
      align-items: flex-start;
      font-size: 22px;
    }
    .ctn-icon {
      display: flex;

      a {
        color: #d4d4d8;
        font-weight: bold;

        :hover {
          color: var(--primary);
        }
      }
    }
  }
  .ctn-setting {
    margin-top: 42px;
  }
`;
