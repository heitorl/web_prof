import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

const ListDisciplines = () => {
  const { teacher } = useContext(TeacherContext);
  const [disciplines, setDisciplines] = useState([]);

  // console.log(teacher);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#1E90FF",
    fontWeight: "700",
  }));

  useEffect(() => {
    console.log(teacher, "teacher in useEffect");
    setDisciplines(
      teacher.disciplines.length ? teacher.disciplines[0].disciplines : []
    );
  }, [teacher]);

  return (
    <div>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
        {disciplines.map((element) => (
          <Item key={element}>{element}</Item>
        ))}
      </Stack>
    </div>
  );
};

export default ListDisciplines;
