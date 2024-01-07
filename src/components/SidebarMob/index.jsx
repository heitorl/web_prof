import { Container, Content } from "./style";
import { IoIosSchool } from "react-icons/io";

export const SidebarMob = () => {
  return (
    <Container>
      <Content>
        <div className="ctn-logo">
          <IoIosSchool />
        </div>
      </Content>
    </Container>
  );
};
