import theme from "@/theme";
import styled from "styled-components/native";

export interface IInput {
  borderColor?: string;
  error?: boolean;
  pr?: string;
}

const Input = styled.TextInput<IInput>`
  height: 48px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 1.5px;
  border-color: ${({ borderColor, error }) =>
    error ? theme.colors.red : borderColor};
  border-radius: 10px;
  padding-left: 10px;
  font-weight: 500;
  width: 100%;
  padding-right: ${({ pr }) => pr};
`;

Input.defaultProps = {
  borderColor: theme.colors.text,
  pr: "0px",
};

export default Input;
