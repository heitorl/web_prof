import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
`

export const Content = styled.div`
  padding: 16px;
  height: 0;

`


export const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .ctn-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 120px;
    div{
      display: flex;
      margin-top: 2px;
      div + div {
        margin-left: 20px;
      }
    }
    .custom-textfield .MuiInputBase-input {
      padding-top: 0px;
      
    }
  

    span{
      font-size: 1.5rem;
      font-weight: bold;
      color: rgb(113, 128, 150);
    }
  }

  .ctn-teachers{
    display: flex;
    width: 1100px;
    height: 100%;
    justify-content: center;

    ul{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;


      li{
        width: 300px;
        display: flex;
        margin: 20px 0px 0px 30px;
        height: 380px;
        border-radius: 8px;
        border: 1px solid  rgb(113, 128, 150);
        box-shadow: 4px 4px 10px gray;        
        flex-direction: column;
        .info{
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
              font-size: 14px;
              color: rgb(113, 128, 150);

            }
          }
        .description{
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;
          span{
            color: #4A5568;
            font-size: 13px;
            margin-left: 10px;
            font-family: 'Roboto';
          }       
        
          .assesment {
              display: flex;
              align-items: center;
              margin: 8px 10px;

              svg {
                color: darkorange;
                font-size: 20px;
              }
              span {
                font-size: 15px;
                margin-left: 3px;
                font-weight: bold;
              }
              .price{
                margin-left: 30px;
                padding: 2px;
                background: lightgreen;
                border-radius: 5px;
              }
          }
          .ctn-button{

            width: 100px;
            display: flex;
            margin-left: 10px;
          }
            

            button{
              font-size: 15px;
              margin: 0px;
              height: 30px;
              font-size: 14px;
            }
          }
        }
          .ctn-img{
            display: flex;
            max-width: 300px;
            flex-direction: column;
            margin: 14px;
            align-items: center;
            width: 265px;
            height: 170px;
            img {
              border-radius: 6px;
              max-width: 100%;
              max-height: 100%;
              object-fit: cover;
            }
          }

        }

      }
    }
  }
`