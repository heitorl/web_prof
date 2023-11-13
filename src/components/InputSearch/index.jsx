import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { ContainerForm } from "./style";
import Button from "../Button";

export const ImputSearch = ({ setTeacherList }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { findAllTeacher } = useContext(TeacherContext);

  useEffect(() => {
    const fetchTeacherList = async () => {
      try {
        const response = await findAllTeacher();
        const allDisciplines = response.reduce((acc, teacher) => {
          const disciplinas = teacher.disciplines[0]?.disciplines;
          return acc.concat(disciplinas);
        }, []);
        const uniqueDisciplines = [...new Set(allDisciplines)];
        const formattedDisciplines = uniqueDisciplines.map((discipline) => ({
          label: discipline,
        }));
        setDisciplines(formattedDisciplines);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeacherList();
  }, [findAllTeacher]);

  const handleSearch = async () => {
    try {
      const response = await findAllTeacher();
      const filteredTeachers = response.filter((teacher) => {
        const teacherDisciplines = teacher.disciplines[0]?.disciplines;
        return teacherDisciplines.includes(searchValue["label"]);
      });

      setTeacherList(filteredTeachers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={disciplines}
        getOptionLabel={(option) => option.label}
        sx={{ width: 280, margin: 0, borderRadius: 3 }}
        renderInput={(params) => <TextField {...params} label="Disciplinas" />}
        value={null}
        onChange={(e, newValue) => setSearchValue(newValue)}
        className="custom-textfield"
      />
      <Button type="submit">Buscar</Button>
    </ContainerForm>
  );
};
