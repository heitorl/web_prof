import { useState } from "react";

import Header from "../../components/Header";
import { ImputSearch } from "../../components/InputSearch";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerSearch, Content, ContentSideBar } from "./style";
import { FilterSearchTeacher } from "../../components/FilterSearchTeacher";

const Dashboard = () => {
  const [teacherList, setTeacherList] = useState([]);

  console.log(teacherList, "list dashboard");

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

          <FilterSearchTeacher teacherList={teacherList} />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
