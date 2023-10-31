import styled from "styled-components";
import fotoAvatar from "../../assets/bob.jpg"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  `

export const Content = styled.div`
  width:50%;
  /* background-color: #2D3748; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  max-width: 100%;

  .ctn-header{
    font-size: 2rem;
    padding: 12px;

    span{
      width: 100%;
      color: #2D3748;
      border-bottom: 1px solid #2D3748;
    }
  }

`


export const ContentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  
  li{
    width: 100%;
    padding: 6px;
    display: flex;

    .ctn-li{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;

      color:  #2D3748;
      font-size: 16px;
      font-weight: bold;

      .ctn-avatar{
        border-radius: 50%;
        height: 50px;
        width: 50px;
        display: flex;
        background-image: url(${fotoAvatar});
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`