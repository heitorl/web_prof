import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AnimationContainer, Background, Container, Content } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TeacherContext } from "../../../providers/TeacherContext";
import { useContext } from "react";

const StudentRegister = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    lastName: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const { registerUser } = useContext(TeacherContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFuction = async (data) => {
    await registerUser(data, "teacher");
    reset();
  };

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFuction)}>
            <h1>Cadastro</h1>
            <Input
              icon={FiUser}
              label="Nome"
              placeholder="nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              icon={FiUser}
              label="Sobrenome"
              placeholder="sobrenome"
              register={register}
              name="lastName"
              error={errors.lastName?.message}
            />
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
            <Input
              icon={FiLock}
              label="Confirmar senha"
              placeholder="confirme sua senha"
              type="password"
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça o <Link to="/teacher/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default StudentRegister;
