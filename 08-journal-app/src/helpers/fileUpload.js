export const fileUpload = async (file) => {
  if (!file) throw new Error("No existe el archivo a subir");
  const cloudURL = "https://api.cloudinary.com/v1_1/cursos-dgm/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudURL, { method: "POST", body: formData });
    if (!resp.ok) throw new Error("No se pudo subir imagen");
    const cloudResp = await resp.json();
    console.log({ cloudResp });
    return cloudResp.secure_ur;
  } catch (error) {
    throw new Error(error.message);
  }
};
