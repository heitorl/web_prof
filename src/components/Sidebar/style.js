import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const ContentGeral = styled.div`
  margin-top: 22px;
  margin-top: 20px;

  .bar {
    width: 80%;
    margin-top: 20px;
    border-bottom: 1px solid var(--primary);
  }
  .ctn-title {
    margin-top: 28px;
    span {
      color: #718096;
      font-size: 28px;
      font-weight: bold;
    }
  }

  .ctn-links > div {
    padding-top: 16px;
  }
  .ctn-links {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-decoration: none;
    font-size: 22px;
    color: var(--secondary);

    .ctn-icon {
      display: flex;

      svg {
        margin-right: 15px;
      }
      a {
        color: #a0aec0;
        :hover {
          color: #4a5568;
        }
      }
    }
  }
  .ctn-setting {
    margin-top: 42px;
  }
`;
