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
import { Chat } from "../../components/Chat";
import useAvatarUrl from "../../utils/getAvatarForUser";

const Dashboard = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [selectedTeacherToMsg, setSelectedTeacherToMsg] = useState({});
  const [openChat, setOpenChat] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState();
  const { findAllTeacher, user, valueFind, getImageAvatar } =
    useContext(TeacherContext);

  const { isModalOpen, openModal } = useModal();

  useEffect(() => {
    const findTeacher = async () => {
      try {
        const { data } = await findAllTeacher();

        const teachersFiltered = data.filter(
          (teacher) => teacher.id !== user.id
        );

        setTeacherList(teachersFiltered);
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

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const { avatarPath } = await getImageAvatar(selectedTeacherToMsg);

        setAvatarUrl(avatarPath);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAvatar();
  }, [selectedTeacherToMsg]);

  const handleCloseChat = () => setOpenChat(false);

  return (
    <Container>
      <Header />

      <Content>
        <ContentSideBar>
          <Sidebar />
        </ContentSideBar>
        <main className="main">
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
            <div className="bar"></div>
          </div>

          <div className="coll-view">
            <ContainerSearch>
              {isModalOpen && (
                <div className="modal">
                  {" "}
                  <Warning />
                </div>
              )}
              {isModalOpen && <Backdrop />}
            </ContainerSearch>

            {user.address && !!teacherList.length && (
              <FilterSearchTeacher
                teacherList={teacherList}
                openChat={openChat}
                setOpenChat={setOpenChat}
                setSelectedTeacherToMsg={setSelectedTeacherToMsg}
              />
            )}
          </div>
        </main>
      </Content>

      {openChat && (
        <Chat
          onClose={handleCloseChat}
          avatarUrl={avatarUrl}
          teacher={selectedTeacherToMsg}
        />
      )}
    </Container>
  );
};

export default Dashboard;
