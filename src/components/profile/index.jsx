import { StandardMessagePerfil } from "../StandardMessagePerfil";
import { Container } from "./style";
import Button from "../Button";
import { MdMessage, MdOutlineStarPurple500 } from "react-icons/md";
import useAvatarUrl from "../../utils/getAvatarForUser";

export const Profile = ({ teacher }) => {
  const avatarUrl = useAvatarUrl(teacher);

  return (
    <Container>
      <div className="main">
        <div className="box-resume">
          <StandardMessagePerfil user={teacher} />
        </div>

        <div className="ctn-profile">
          <div className="ctn-description">
            <div className="ctn-img">
              <img src={avatarUrl} alt="teacher" />
              <p>
                {teacher?.name} {teacher?.lastName}
              </p>
              <div className="star">
                <MdOutlineStarPurple500 />
                <span>5.0 (x avaliações)</span>
              </div>
              <div className="info-price">
                <div>
                  <span>Preço hora/aula</span>
                  <span>R$90</span>
                </div>
                <div>
                  <span>Número de alunos</span>
                  <span>12</span>
                </div>
              </div>
              <div className="ctn-button">
                <Button>
                  <MdMessage /> Contatar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
