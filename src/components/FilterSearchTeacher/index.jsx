import { MdOutlineStarPurple500 } from "react-icons/md";
import Button from "../Button";

import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { Backdrop, ContainerTeachers } from "./style";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useModal } from "../../utils/useModalSchema";
import { Profile } from "../profile";

export const FilterSearchTeacher = ({
  teacherList,
  setOpenChat,
  setSelectedTeacherToMsg,
}) => {
  const { getImageAvatar, user } = useContext(TeacherContext);
  const [avatarUrls, setAvatarUrls] = useState([]);

  const { isModalOpen, openModal } = useModal();

  useEffect(() => {
    async function fetchAvatar() {
      try {
        if (!Array.isArray(teacherList)) {
          return;
        }

        const urls = await Promise.all(
          teacherList.map(async (teacher) => {
            const response = await getImageAvatar(teacher);
            return response;
          })
        );

        if (!Array.isArray(urls)) {
          return;
        }

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

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleObjectSelection = (object) => {
    setSelectedTeacher(object);
  };

  const handleOpenChat = (u) => {
    setSelectedTeacherToMsg(u);
    setOpenChat(true);
  };
  return (
    <ContainerTeachers>
      <ul>
        {teacherList &&
          teacherList.map((user) => {
            return (
              <li key={user.id}>
                <div className="ctn-img">
                  <img src={avatarUrls[user.id]?.avatarPath} alt="avatar" />
                </div>
                <div className="info">
                  <h2>
                    {user.name} {user.lastName}
                  </h2>
                  <div className="ctn-disc">
                    {user.disciplines &&
                      user.disciplines[0]?.disciplines.map(
                        (disc, index, array) => (
                          <span key={index}>
                            {disc}
                            {index !== array.length - 1 && " / "}{" "}
                          </span>
                        )
                      )}
                  </div>
                </div>
                <div className="description">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                  <div className="assesment">
                    <span>
                      {" "}
                      <MdOutlineStarPurple500 />
                      5.0
                    </span>
                    <span className="price">R$ 90/h</span>
                  </div>
                  <div className="map">
                    <span className="neighborhood">
                      {user.address?.neighborhood}
                    </span>
                    <FaMapMarkedAlt />
                    <span>
                      {" "}
                      {user.distanceInKilometers
                        ? `${user.distanceInKilometers} km de distância`
                        : "?"}
                    </span>
                  </div>
                  <div className="ctn-button">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleObjectSelection(user);
                        openModal();
                      }}
                    >
                      SABER MAIS
                    </Button>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenChat(user);
                      }}
                    >
                      MENSAGEM
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="modal">
        {isModalOpen && <Profile teacher={selectedTeacher} />}
      </div>
      {isModalOpen && <Backdrop />}
    </ContainerTeachers>
  );
};
