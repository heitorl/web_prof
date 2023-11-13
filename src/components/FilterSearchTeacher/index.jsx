import { MdOutlineStarPurple500 } from "react-icons/md";
import Button from "../Button";

import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../providers/TeacherContext";
import { ContainerTeachers } from "./style";
import { FaMap } from "react-icons/fa";
export const FilterSearchTeacher = ({ teacherList }) => {
  const { getImageAvatar } = useContext(TeacherContext);

  const [avatarUrls, setAvatarUrls] = useState([]);

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

  const handleSelect = () => {
    return;
  };

  return (
    <ContainerTeachers>
      <ul>
        {teacherList &&
          teacherList.map((teacher) => {
            return (
              <li key={teacher.id}>
                <div className="ctn-img">
                  <img src={avatarUrls[teacher.id]} alt="avatar" />
                </div>
                <div className="info">
                  <h2>
                    {teacher.name} {teacher.lastName}
                  </h2>
                  <span>{teacher.disciplines[0]?.disciplines[0]}</span>
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
                    <div className="map">
                      <FaMap /> 12/KM
                    </div>
                  </div>
                  <div className="ctn-button">
                    <Button onClick={() => handleSelect(teacher)}>
                      SABER MAIS
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </ContainerTeachers>
  );
};
