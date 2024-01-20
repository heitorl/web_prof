import load from "../../assets/loadingComponent.svg";
import { Container } from "./style";

export const LoadingComponents = () => {
  return (
    <Container>
      <img src={load} alt="loading" />
    </Container>
  );
};
