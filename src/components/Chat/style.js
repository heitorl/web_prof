import styled from "styled-components"

export const ChatModal = styled.div`
  position: fixed;
  bottom: 20px;
  width: 300px;
  height: 320px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  .chat-header{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
    background: skyblue;

    img{
      width: 30px;
      border-radius: 50%;
    }
  }


  .chat-body{
    width: 100%;
    height: 100%;
    margin: 3px;


    .ctn-description{
      width: 100%;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-items: center;
      margin: 5px;

      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span{
        margin-left: 3px;
      }
    }
    .ctn-description.owner {
      justify-content: flex-end;
      text-align: right;
    }
  }

`
