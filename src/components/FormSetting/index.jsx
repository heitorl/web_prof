import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Formn } from "./style";
import Button from "../Button";
import Input from "../Input";
import { createValidationSchemaUtil } from "../../utils/createValidationSchema";
import MultipleSelectCheckmarks from "../Checkmarks";
import ListDisciplines from "../ListDisciplines";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
const Form = ({
  onSubmit,
  inputs,
  selectedDisciplines,
  setSelectedDisciplines,
  handleChange,
}) => {
  const schema = createValidationSchemaUtil(inputs);

  const { user } = useContext(TeacherContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    const { selectedDisciplines, ...formData } = data;

    await onSubmit(formData);
    reset();
  };

  console.log(user, "uuuuuu");

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

      {user.disciplines && (
        <div>
          <div className="check-disc">
            <h3>Selecione até 3 disciplinas para ensinar: </h3>
            <MultipleSelectCheckmarks
              selectedDisciplines={selectedDisciplines}
              setSelectedDisciplines={setSelectedDisciplines}
              handleChange={handleChange}
            />
          </div>
          <div className="my-disc">
            <h3>Disciplinas que ensino:</h3>
            <ListDisciplines />
          </div>
        </div>
      )}

      <Button type="submit">Enviar</Button>
    </Formn>
  );
};

export default Form;
