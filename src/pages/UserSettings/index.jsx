import { useContext } from "react";
import Header from "../../components/Header";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { Container, Content } from "./style";
import { TeacherContext } from "../../providers/TeacherContext";
import { FaCamera } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import LocationMap from "../../components/LocationMap";
import GoogleMapWithGeocoding from "../../components/LocationMap";

const UserSettings = () => {
  const { teacher } = useContext(TeacherContext);
  const avatarUrl = useAvatarUrl(teacher);
  console.log(teacher);

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <div className="content-info">
          <div className="ctn-photo">
            <div className="title">
              <h3>Foto do perfil</h3>
              <FaCamera />
            </div>

            <div className="photo">
              <img src={avatarUrl} alt="avatar" />
              <FaCamera />
            </div>
          </div>

          <div>
            <GoogleMapWithGeocoding addressData={teacher.address} />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default UserSettings;
