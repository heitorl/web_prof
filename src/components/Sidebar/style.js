import styled from "styled-components";

export const Container = styled.div`

  width: 240px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  height: 100%;

`


export const ContentGeral = styled.div`
  margin-top: 22px;
  margin-top: 20px;

  .ctn-title{
    margin-top: 28px;
    span{
      color: #718096;
      font-size: 26px;
      font-weight: bold;
    }
  }
  
    .ctn-links{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-decoration: none;
      font-size: 20px;
      color: var(--secondary);

      .ctn-icon{
        display: flex;        
        
        svg{
          margin-right: 15px;
        }
        a{
          color: #A0AEC0;
          :hover{
            color: #4A5568;
          }
        }
      }
    }
    .ctn-setting{
      margin-top: 42px;
    }

`