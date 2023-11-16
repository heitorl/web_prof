import { useContext, useEffect, useState } from "react";

import Header from "../../components/Header";
import { ImputSearch } from "../../components/InputSearch";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerSearch, Content, ContentSideBar } from "./style";
import { FilterSearchTeacher } from "../../components/FilterSearchTeacher";
import { TeacherContext } from "../../providers/TeacherContext";

const Dashboard = () => {
  const [teacherList, setTeacherList] = useState([]);
  const { findAllTeacher } = useContext(TeacherContext);

  useEffect(() => {
    const findTeacher = async () => {
      try {
        const { data } = await findAllTeacher();
        setTeacherList(data);
      } catch (error) {
        console.error(error);
      }
    };

    findTeacher();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <ContentSideBar>
          <Sidebar />
        </ContentSideBar>

        <div className="coll-view">
          <ContainerSearch>
            <div className="ctn-title">
              <span>
                Faça uma busca personalizada e encontre o seu professor
                perfeito.
              </span>

              <ImputSearch setTeacherList={setTeacherList} />
            </div>
          </ContainerSearch>
          <div className="bar"></div>
          {teacherList.length > 0 && (
            <FilterSearchTeacher teacherList={teacherList} />
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
