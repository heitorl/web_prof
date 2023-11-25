import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../providers/TeacherContext";
import userNull from "../assets/undefined.png";

const useAvatarUrl = (teacher) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const { getImageAvatar } = useContext(TeacherContext);

  useEffect(() => {
    async function fetchAvatar() {
      try {
        if (teacher.avatar) {
          const response = await getImageAvatar(teacher);

          setAvatarUrl(response);
        } else {
          setAvatarUrl(userNull);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAvatar();
  }, [teacher]);

  return avatarUrl;
};

export default useAvatarUrl;
