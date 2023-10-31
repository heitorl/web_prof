import React, { useState, useRef } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useEffect } from "react";

function EditDescription() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const descriptionRef = useRef(null);
  // const { token, editResumeFromCurriculum } = useContext(TeacherContext)

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    // faça algo com a descrição salva
    // const body = {
    //   resume: description
    // };
    // const test = await editResumeFromCurriculum(token, body);
    console.log(description, 'laklak')
    handleClose();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      descriptionRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Editar Descrição</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            variant="outlined"
            label="Descrição"
            value={description}
            inputRef={descriptionRef}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave} color="primary">Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditDescription;