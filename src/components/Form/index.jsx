import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { Formn } from "./style";
import Input from "../Input";
import { createValidationSchemaUtil } from "../../utils/createValidationSchema";

const Form = ({ onSubmit, inputs }) => {
  const schema = createValidationSchemaUtil(inputs);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <Formn onSubmit={handleSubmit(onSubmitFunction)}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          icon={input.icon}
          label={input.label}
          placeholder={input.placeholder}
          type={input.type}
          register={register}
          name={input.name}
          error={errors[input.name]?.message}
        />
      ))}

      <Button type="submit">Enviar</Button>
    </Formn>
  );
};

export default Form;
