import styled from "styled-components";

export const Container = styled.button`

  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#1E90FF")};
  color: ${(props) => (props.whiteSchema ? "#1E90FF" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: 'Roboto Mono', monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  font-weight: bold;

  :hover {
    border: 2px solid ${(props) => (props.whiteSchema ? "#1E90FF" : "#c85311")};
    
  }
`