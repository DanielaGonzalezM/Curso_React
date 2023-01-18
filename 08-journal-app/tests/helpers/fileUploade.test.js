import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "cursos-dgm",
  api_key: "555923867234813",
  api_secret: "yNP_vLSRxYMgDmPCXV1iRRhxuIE",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageURL =
      "https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg";
    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], "gatito.jpg");
    const url = await fileUpload(file);
    expect(typeof imageURL).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    const cloudResp = await cloudinary.api.delete_resources(
      ["journal/" + imageId],
      {
        resource_type: "image",
      }
    );
    //console.log(cloudResp);
  });

  test("debe retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
