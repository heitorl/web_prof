import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    width: 100%;
    background-color: var(--primary);
    height: 64px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%);
    display: flex;
    align-items: center;
  }
`;

export const ContentLogo = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 42px;

  span {
    color: #edf2f7;
    font-size: 26px;
    font-weight: bold;
  }
  svg {
    font-size: 42px;
    color: #ffff;
    margin-right: 8px;
  }
`;

export const ContentNotification = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
  border-right: 2px solid rgb(226, 232, 240);

  svg + svg {
    margin-right: 8px;
    margin-left: 8px;
  }
  svg {
    color: #e2e8f0;
    font-size: 22px;
  }

  .ctn-ntf {
    position: relative;
  }

  .notification {
    position: relative;
    cursor: pointer;
  }
`;

export const ContentPerfil = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  margin-right: 42px;
  width: 240px;

  .ctn-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 22px;
    font-size: 14px;
    color: #e2e8f0;
    font-weight: bold;
  }

  .ctn-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  position: absolute;
  color: white;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 20px;
  right: -5px;
  top: -12px;
`;
