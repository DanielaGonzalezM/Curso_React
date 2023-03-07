export const getEnvVariables = () => {
  //import.meta.env; //se comenta por error en el build
  return {
    //...import.meta.env,// se comenta por error en el build
    VITE_API_URL: import.meta.env.VITE_API_URL, //solución
  };
};
