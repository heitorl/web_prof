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
import { useLocation } from "react-router-dom";

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

  const location = useLocation();

  const isRouteActive = (path) => location.pathname === path;

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
            <div
              className={`ctn-icon ${
                isRouteActive("/dashboard") ? "inUse" : ""
              }`}
            >
              <Link to="/dashboard">
                <TbLayoutDashboard />
              </Link>
              <span>
                <Link to="/dashboard">Dashboard</Link>
              </span>
            </div>

            <div
              className={`ctn-icon ${isRouteActive("/profile") ? "inUse" : ""}`}
            >
              <Link to="/profile">
                <FaUserTie />
              </Link>
              <span>
                <Link to="/profile">Meu perfil</Link>
              </span>
            </div>

            <div
              className={`ctn-icon ${
                isRouteActive("/contacts") ? "inUse" : ""
              }`}
            >
              <Link>
                <IoIosContacts />
              </Link>
              <div>
                <span>
                  <Link>Contatos</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="ctn-title">
            <span>Account</span>
          </div>

          <div className="bar"></div>
          <div className="ctn-links">
            <div
              className={`ctn-icon ${isRouteActive("/address") ? "inUse" : ""}`}
            >
              <Link to="/address">
                <FaRegAddressCard />
              </Link>
              <span>
                <Link to="/address">Meu Endereço</Link>
              </span>
            </div>

            <div
              className={`ctn-icon ${
                isRouteActive("/settings") ? "inUse" : ""
              }`}
            >
              <Link to="/settings">
                <FiSettings />
              </Link>
              <span>
                <Link to="/settings">Configuração</Link>
              </span>
            </div>

            <div className={`ctn-icon ${isRouteActive("") ? "inUse" : ""}`}>
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
