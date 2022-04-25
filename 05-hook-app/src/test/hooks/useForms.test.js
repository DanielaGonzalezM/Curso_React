import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useForms } from "../../hooks/useForms";

describe("Pruebas useForms", () => {
  const initialForm = {
    name: "Daniela",
    email: "daniela@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForms(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual({
      name: "Daniela",
      email: "daniela@gmail.com",
    });
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForms(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Dany",
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Dany" });
  });


  test("debe de re-establecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForms(initialForm));
    const [, handleInputChange,reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Dany",
        },
      });
      reset();
    });

    const [values] = result.current;
    expect(values).toEqual({ initialForm});
  });
});
