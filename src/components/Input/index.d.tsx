import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { IInput } from "./index.style";

export interface InputProps extends TextInputProps, IInput {
  children?: ReactNode;
  msgErro?: string;
}
