import styled, { keyframes } from "styled-components"
import Educator2 from "../../../assets/educator3.svg"
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


`

export const Background = styled.div`

@media(min-width: 1000px){
  flex: 1;
  background: url(${Educator2}) no-repeat center;
  background: linear-gradient(to top, #56ccf2, #2f80ed); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 50%;
  
  
  
}

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  background: white;

  h1 {
    font-size: 3rem;
  }

`

const appearFromLeft = keyframes`

  from{
    opacity: 0;
    transform: translateX(-100px);    
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 2s;


  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 32px;
    }
    > div {
      margin-top: 14px;
    }

    p{
      margin-top: 8px;
    }

    a{
      font-weight: bold;
      color: #1E90FF;
    }
  }
`