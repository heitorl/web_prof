import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext, useState, useEffect } from "react";
import { TeacherContext } from "../../providers/TeacherContext";

export default function ComboBox() {
  const { findAllTeacher } = useContext(TeacherContext);
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    const fetchTeacherList = async () => {
      try {
        const response = await findAllTeacher();
        console.log(response);
        const names = response.map((teacher) => teacher.name);
        setTeacherList(names);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeacherList();
  }, [findAllTeacher]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={teacherList}
      sx={{ width: 150, margin: 0, paddingTop: 0 }}
      renderInput={(params) => <TextField {...params} label="Disciplina" />}
      className="custom-textfield"
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
