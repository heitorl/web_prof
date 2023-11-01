import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Formn } from "./style";
import Button from "../Button";
import Input from "../Input";
import { createValidationSchemaUtil } from "../../utils/createValidationSchema";
import SelectedInput from "../SeletecdInput";
import MultipleSelectCheckmarks from "../Checkmarks";
const Form = ({
  onSubmit,
  inputs,
  disciplines,
  selectedDisciplines,
  setSelectedDisciplines,
}) => {
  const schema = createValidationSchemaUtil(inputs);

  const {
    register,
    handleSubmit,
    control, // Adicione o control do React Hook Form
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    // Acessar disciplinas selecionadas no objeto data
    const { selectedDisciplines, ...formData } = data;

    // Execute sua função de envio com os dados e disciplinas selecionadas
    await onSubmit(formData);
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
          value={input.defaultValue}
        />
      ))}
      <div className="check-disc">
        <h3>Selecione até 3 disciplinas para ensinar: </h3>
        <MultipleSelectCheckmarks />
      </div>
      <div className="my-disc">
        <h3>Disciplinas que ensino:</h3>
        <SelectedInput />
      </div>

      <Button type="submit">Enviar</Button>
    </Formn>
  );
};

export default Form;
