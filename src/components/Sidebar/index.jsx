import { Link, useNavigate } from "react-router-dom";
import { Container, ContentGeral } from "./style";
import { IoIosPerson, IoIosContacts, IoIosLogOut } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { useEffect } from "react";
import { useState } from "react";

export const Sidebar = () => {
  const { teacherLogout } = useContext(TeacherContext);

  const navigate = useNavigate();

  const [endpoint, setEndpoint] = useState("");

  const handleNavigation = (newEndpoint) => {
    console.log(newEndpoint);
    setEndpoint(newEndpoint);
  };

  useEffect(() => {
    navigate(endpoint);
  }, [endpoint]);

  return (
    <>
      <Container>
        <ContentGeral>
          <div className="ctn-title">
            <span>GERAL</span>
          </div>
          <div className="bar"></div>

          <div className="ctn-links">
            <div className="ctn-icon">
              <TbLayoutDashboard />
              <Link onClick={() => handleNavigation("/dashboard")}>
                Dashboard
              </Link>
            </div>

            <div className="ctn-icon">
              <IoIosPerson />
              <Link to="/search">Buscar Professor</Link>
            </div>

            <div className="ctn-icon">
              <IoIosContacts />
              <Link>Contatos</Link>
            </div>
          </div>
          <div className="ctn-title">
            <span>Account</span>
          </div>

          <div className="bar"></div>
          <div className="ctn-links">
            <div className="ctn-icon">
              <FaRegAddressCard />
              <Link>Meu Endereço</Link>
            </div>

            <div className="ctn-icon">
              <FiSettings />
              <Link onClick={() => handleNavigation("/settings")}>
                Configuração
              </Link>
            </div>

            <div className="ctn-icon">
              <IoIosLogOut />
              <Link onClick={teacherLogout}>Logout</Link>
            </div>
          </div>
        </ContentGeral>
      </Container>
    </>
  );
};

export default Sidebar;
