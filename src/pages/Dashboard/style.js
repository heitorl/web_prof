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

export const Main = styled.div`

  display: flex;
  width: 100%;
  justify-content: center;
  height: 20%;
  align-items: center;
  input + input{
      margin-right: 20px;
    }
  .search {
    display: flex;
    justify-content: center; 
    width: 100%;   
  }
`