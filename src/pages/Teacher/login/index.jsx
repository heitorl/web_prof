import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AnimationContainer, Background, Container, Content } from "./style";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TeacherContext } from "../../../providers/TeacherContext";

const TeacherLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 8 digitos")
      .required("Campo obrigatório!"),
  });

  const { loginUser } = useContext(TeacherContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFuction = (data) => {
    loginUser(data, "teacher");
    reset();
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFuction)}>
            <h1>Entrar como professor</h1>

            <Input
              icon={FiMail}
              label="Email"
              placeholder="email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="uma senha segura"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Não possui uma conta? Faça o{" "}
              <Link to="/teacher/register">Cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default TeacherLogin;
