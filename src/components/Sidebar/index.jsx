import { Link, useNavigate } from "react-router-dom";
import { Container, ContentGeral } from "./style";
import { IoIosPerson, IoIosContacts, IoIosLogOut } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegAddressCard, FaUserTie } from "react-icons/fa";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosSchool } from "react-icons/io";

export const Sidebar = () => {
  const { teacherLogout } = useContext(TeacherContext);

  const navigate = useNavigate();

  const [endpoint, setEndpoint] = useState("");

  const handleNavigation = (newEndpoint) => {
    setEndpoint(newEndpoint);
  };

  useEffect(() => {
    navigate(endpoint);
  }, [endpoint]);

  return (
    <>
      <Container>
        <ContentGeral>
          <div className="ctn-logo">
            <IoIosSchool />
          </div>
          <div className="ctn-title">
            <span>GERAL</span>
          </div>

          <div className="bar"></div>

          <div className="ctn-links">
            <div className="ctn-icon">
              <Link to="/dashboard">
                <TbLayoutDashboard />
              </Link>
              <span>
                <Link to="/dashboard">Dashboard</Link>
              </span>
            </div>

            <div className="ctn-icon">
              <Link to="/profile">
                <FaUserTie />
              </Link>
              <span>
                <Link to="/profile">Meu perfil</Link>
              </span>
            </div>

            <div className="ctn-icon">
              <Link>
                <IoIosContacts />
              </Link>
              <span>
                <Link>Contatos</Link>
              </span>
            </div>
          </div>
          <div className="ctn-title">
            <span>Account</span>
          </div>

          <div className="bar"></div>
          <div className="ctn-links">
            <div className="ctn-icon">
              <Link to="/address">
                <FaRegAddressCard />
              </Link>
              <span>
                <Link to="/address">Meu Endereço</Link>
              </span>
            </div>

            <div className="ctn-icon">
              <Link to="/settings">
                <FiSettings />
              </Link>
              <span>
                <Link to="/settings">Configuração</Link>
              </span>
            </div>

            <div className="ctn-icon">
              <Link onClick={teacherLogout}>
                <IoIosLogOut />
              </Link>
              <span>
                <Link onClick={teacherLogout}>Logout</Link>
              </span>
            </div>
          </div>
        </ContentGeral>
      </Container>
    </>
  );
};

export default Sidebar;
