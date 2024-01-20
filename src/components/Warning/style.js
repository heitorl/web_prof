import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 280px;
  padding: 22px;
  align-items: center;
  background-color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;

  .ctn-msg {
    height: 100%;
    padding: 12px;
    font-size: 18px;
    text-align: center;
    color: rgb(113, 128, 150);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .link {
    font-weight: bold;

    a {
      color: var(--primary);
    }
  }

  @media (min-width: 1000px) {
    width: 720px;
    height: 200px;
    padding: 16px;
    .ctn-msg {
      display: block;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
    color: gold;
  }
`;
