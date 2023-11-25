import { useContext, useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CheckboxesTags from "../../components/InputSearch";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { TeacherContext } from "../../providers/TeacherContext";
import { Container, ContainerSearch, Content } from "./style";

const TeacherSearch = () => {
  const { findAllTeacher, valueFind, getImageAvatar } =
    useContext(TeacherContext);

  const [teacherList, setTeacherList] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);

  const history = useNavigate();
  const handleSelect = (object) => {
    valueFind.selectObject(object);
    history("/teacher/info");
  };

  // Busca a lista de professores ao carregar a página
  useEffect(() => {
    const fetchTeacherList = async () => {
      try {
        const response = await findAllTeacher();
        setTeacherList(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeacherList();
  }, []);
  useEffect(() => {
    async function fetchAvatar() {
      try {
        const urls = await Promise.all(
          teacherList.map(async (teacher) => {
            const response = await getImageAvatar(teacher);
            return response;
          })
        );
        const avatarUrlsObj = urls.reduce((acc, url, index) => {
          const teacherId = teacherList[index].id;
          acc[teacherId] = url;
          return acc;
        }, {});
        setAvatarUrls(avatarUrlsObj);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAvatar();
  }, [teacherList, getImageAvatar]);
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
      </Content>

      <ContainerSearch>
        <div className="ctn-title">
          <span>
            Faça uma busca personalizada e encontre o seu professor perfeito.
          </span>
          <div>
            {/* <CheckboxesTags />
            <CheckboxesTags /> */}
          </div>
        </div>
        <div className="ctn-teachers">
          <ul>
            {teacherList &&
              teacherList.map((teacher) => (
                <li key={teacher.id}>
                  <div className="ctn-img">
                    <img src={avatarUrls[teacher.id]} alt="lulaMolusco" />
                  </div>
                  <div className="info">
                    <h2>
                      {teacher.name} {teacher.lastName}
                    </h2>
                    <span>{teacher.disciplines[0]?.disciplines[0]}</span>
                  </div>
                  <div className="description">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </span>
                    <div className="assesment">
                      <MdOutlineStarPurple500 />
                      <span>5.0</span>
                      <span className="price">R$90/h</span>
                    </div>
                    <div className="ctn-button">
                      <Button onClick={() => handleSelect(teacher)}>
                        SABER MAIS
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </ContainerSearch>
    </Container>
  );
};

export default TeacherSearch;
