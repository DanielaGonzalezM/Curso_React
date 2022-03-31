export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Iteración: " + { i });
    }

    return `${iteraciones} iteraciones realizadas.`;
  };