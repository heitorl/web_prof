import { useContext, useEffect, useState } from "react";

import Header from "../../components/Header";
import { ImputSearch } from "../../components/InputSearch";
import Sidebar from "../../components/Sidebar";
import {
  Backdrop,
  Container,
  ContainerSearch,
  Content,
  ContentSideBar,
} from "./style";
import { FilterSearchTeacher } from "../../components/FilterSearchTeacher";
import { TeacherContext } from "../../providers/TeacherContext";
import { useModal } from "../../utils/useModalSchema";
import { Warning } from "../../components/Warning";

const Dashboard = () => {
  const [teacherList, setTeacherList] = useState([]);
  const { findAllTeacher, user } = useContext(TeacherContext);

  const { isModalOpen, openModal } = useModal();

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

  useEffect(() => {
    if (!user.address) {
      openModal();
    }
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
            {isModalOpen && (
              <div className="modal">
                {" "}
                <Warning />
              </div>
            )}
            {isModalOpen && <Backdrop />}
            <div className="ctn-title">
              {user.address && (
                <div className="content">
                  <span>
                    Faça uma busca personalizada e encontre o seu professor
                    perfeito.
                  </span>
                  <ImputSearch setTeacherList={setTeacherList} />
                </div>
              )}
            </div>
          </ContainerSearch>
          <div className="bar"></div>
          {user.address && !!teacherList.length && (
            <FilterSearchTeacher teacherList={teacherList} />
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
