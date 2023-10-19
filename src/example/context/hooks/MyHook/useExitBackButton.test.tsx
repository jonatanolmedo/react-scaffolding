import { renderHook } from "@testing-library/react-native";
import useExitBackButton from "./useExitBackButton";

describe("useExitBackButton", () => {
  it("should run without errors", () => {
    const { result } = renderHook(() => useExitBackButton());
    // No se pueden realizar comprobaciones significativas en este contexto
  });
});
