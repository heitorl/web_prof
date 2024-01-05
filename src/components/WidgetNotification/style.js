import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
  position: absolute;
  top: 55px;
  right: 10px;

  .ctn-title {
    background-color: #111827;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-family: roboto;
      color: #e4e4e7;
    }
  }
  .static {
    /* background-color: rgb(39 39 42); */
    background-color: var(--primary);
    padding: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111827;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 440px;
  overflow-y: hidden;
  transition: overflow 0.3s ease 0s;

  :hover {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  .ctn-notification:last-child {
    border-bottom: none;
  }
  .ctn-notification {
    display: flex;
    height: 100px;
    cursor: pointer;
    border-bottom: 1px solid var(--primary);

    .ctn-img {
      padding: 30px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }
  }

  .ctn-content {
    display: flex;
    flex-direction: column;
    padding: 20px 8px;
    -webkit-box-pack: center;

    overflow: hidden;

    .destaque-texto {
      color: #d4d4d8;
      font-size: 17px;
      font-weight: 500;
      overflow: hidden;
      white-space: break-spaces;
      text-overflow: ellipsis;
    }

    .destaque-texto::before {
      content: attr(data-name);
      margin-right: 5px;
      font-weight: bold;
      color: #a1a1aa;
      font-size: 20px;
    }

    .info {
      display: flex;
      align-items: center;
      font-size: 15px;
      margin-top: 10px;
      color: lightslategray;

      .circle {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--primary);
        margin-right: 5px;
      }
    }
  }
`;
