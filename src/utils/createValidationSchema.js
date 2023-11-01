import * as yup from "yup";

export const createValidationSchemaUtil = (inputs) => {
  const validationSchema = {};

  inputs.forEach((input) => {
    const { name, validation } = input;

    validationSchema[name] = yup.lazy((value) => {
      if (validation && typeof validation === "function") {
        return validation(value);
      }

      return yup.string().required("Campo obrigatório!");
    });
  });

  return yup.object().shape(validationSchema);
};
