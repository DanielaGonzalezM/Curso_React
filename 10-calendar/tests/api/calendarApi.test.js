import calendarApi from "../../src/api/calendarApi";

describe("Pruebas en el calendarAPI", () => {
  test("should tener la configuración por defecto", () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test("should tener el x-token en el header de todas las peticiones", async () => {
    const tokenTest = "testtokentesttoken";
    localStorage.setItem("token", tokenTest);
    const res = await calendarApi.get("/auth");
    expect(res.config.headers["x-token"]).toBe(tokenTest);
  });
});
