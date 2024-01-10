import { Container, InputContainer } from "./style";

const Input = ({ label, icon: Icon, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer isErrored={!!error} id="ctn-input">
        {Icon && <Icon size={20} />}
        <input {...(register && register(name))} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
