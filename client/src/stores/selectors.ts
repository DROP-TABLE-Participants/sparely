import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useTokens = (): string | null => {
  return useSelector((state: RootState) => {
    return state.components.token;
  });
};
