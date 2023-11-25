import { Link } from "react-router-dom";
import { Container, Icon } from "./style";
import { MdWarningAmber } from "react-icons/md";

export const Warning = () => {
  return (
    <Container>
      <Icon>
        <MdWarningAmber />
      </Icon>
      <div className="ctn-msg">
        <span>
          O endereço ainda não foi cadastrado. Essa informação será utilizada
          para calcular a distância entre professores e alunos, garantindo uma
          correspondência precisa.
        </span>
        <br />
        <br />
        <span className="link">
          Você pode fazer isso clicando <Link to="/address">aqui!</Link>
        </span>
      </div>
    </Container>
  );
};
