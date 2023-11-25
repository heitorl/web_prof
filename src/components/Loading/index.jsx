import load from "../../assets/loadingIcon.svg";
import { Container } from "./style";

export const Loading = () => {
  return (
    <Container>
      <img src={load} alt="loading" />
    </Container>
  );
};
