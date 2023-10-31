import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
 
  .ctn-img{
    width: 250px;
    img{
      width: 100%;
      opacity: 0.7;

    }
    display: flex;

  }
`

export const Content = styled.div`
  max-width: 600px;
  h1 {
    text-shadow: opx 4px 4px rgba(0,0,0, 0.25);
    font-size: 4.5rem;

    span {
      color: var(--primary);
      font-size: 4rem;
    }  
  }
  span{
    font-size: 1.5rem;
    color: #778899;
    font-weight: 500;
  }

  div{ 
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
  
`