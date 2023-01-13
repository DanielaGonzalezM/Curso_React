import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import { ImageGallery } from "../components";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useRef } from "react";
export const NoteView = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onSaveNote = () => {
    dispatch(setActiveNote(formState));
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    console.log("subiendo archivos");
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          varieant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          varieant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
