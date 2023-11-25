import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { useContext } from "react";
import { TeacherContext } from "./providers/TeacherContext";
import { Loading } from "./components/Loading";

function App() {
  const { loading } = useContext(TeacherContext);

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" />
      {loading ? <Loading /> : <Routes />}
    </>
  );
}

export default App;
