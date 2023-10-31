import React from "react";
import { TeacherProvider } from "./TeacherContext";

const Provider = ({children}) => {
  return (
    <TeacherProvider>
      {children}
    </TeacherProvider>
  )
}

export default Provider