import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          31 de Agosto, 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
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
        />
        <TextField
          type="text"
          varieant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          minRows={5}
        />
      </Grid>
      <ImageGallery/>
    </Grid>
  );
};
