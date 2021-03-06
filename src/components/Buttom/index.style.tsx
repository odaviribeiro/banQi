import theme from "@/theme";
import styled from "styled-components/native";

export interface IButtomStyled {
  color?: string;
  bg?: string;
  w?: string;
  borderColor?: string;
  borderRadius?: string;
}

export const ButtomForm = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
  margin-bottom: 50px;
`;

const Buttom = styled.View<IButtomStyled>`
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ w }) => w};
  height: 48px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ borderColor }) => borderColor};
`;

Buttom.defaultProps = {
  color: theme.colors.text,
  bg: theme.colors.primary,
  w: "100%",
  borderColor: theme.colors.primary,
  borderRadius: "40px",
};

export default Buttom;
