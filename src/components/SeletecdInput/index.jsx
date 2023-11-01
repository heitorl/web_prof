import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const SelectedInput = () => {
  const { teacher } = useContext(TeacherContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#1E90FF",
    fontWeight: "700",
  }));

  return (
    <div>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {teacher.disciplines.map((element) => (
          <Item>{element.disciplines[0]}</Item>
        ))}
      </Stack>
    </div>
  );
};

export default SelectedInput;
