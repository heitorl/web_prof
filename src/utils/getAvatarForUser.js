import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../providers/TeacherContext";

const useAvatarUrl = (teacher) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const { getImageAvatar } = useContext(TeacherContext);

  useEffect(() => {
    async function fetchAvatar() {
      try {
        if (teacher) {
          const { avatarPath } = await getImageAvatar(teacher);

          setAvatarUrl(avatarPath);
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
