import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
import { Container, DropContainer, UploadMessage } from "./style";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { ImagePreview } from "../ImagePreview";
import { filesize } from "filesize";
import { TeacherContext } from "../../providers/TeacherContext";

export const UpdateAvatarModal = ({ user }) => {
  const { imageUploaded, setImageUploaded, requestAvatarUpload } =
    useContext(TeacherContext);
  const avatarUrl = useAvatarUrl(user);

  const onDropAccepted = (acceptedFiles) => {
    const imageFile = acceptedFiles.filter(
      (file) =>
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
    );

    if (imageFile.length === 0) {
      console.error("Nenhum arquivo de imagem válido foi enviado.");

      return;
    }

    const uploadedFile = {
      file: imageFile[0],
      name: imageFile[0].name,
      readableSize: filesize(imageFile[0].size),
      preview: URL.createObjectURL(imageFile[0]),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    };

    setImageUploaded(uploadedFile);

    processUpload(uploadedFile);
  };

  const processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    requestAvatarUpload(data);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpeg", ".jpg"],
      },
      onDropAccepted,
      multiple: false,
    });

  const renderDragMessage = () => {
    if (!isDragActive) {
      return <UploadMessage>Arraste sua foto aqui ...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Arquivo não suportado! Apenas imagens são permitidas.
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte sua foto aqui!</UploadMessage>;
  };

  return (
    <Container avatarUrl>
      <div className="title">
        <h2>Atualize a sua foto de perfil!</h2>
      </div>
      <div
        className="ctn-img"
        style={{ backgroundImage: `url(${avatarUrl})` }}
      ></div>
      <DropContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {renderDragMessage()}
      </DropContainer>
      {!!Object.keys(imageUploaded).length && (
        <ImagePreview file={imageUploaded} />
      )}
    </Container>
  );
};
