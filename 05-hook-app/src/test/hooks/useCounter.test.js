import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("debe de retornar 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.cont).toBe(100);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { cont } = result.current;
    expect(cont).toBe(101);
  });

  test("debe de decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { cont } = result.current;
    expect(cont).toBe(99);
  });

  test("debe de decrementar el counter en 1 y dar valor 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;
    act(() => {
      decrement();
      reset();
    });
    const { cont } = result.current;
    expect(cont).toBe(100);
  });
  
});
