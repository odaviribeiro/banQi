import theme from "@/theme";
import styled from "styled-components/native";

export interface IText {
  color?: string;
  fontSize?: string;
}

const Text = styled.Text<IText>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
`;

Text.defaultProps = {
  color: theme.colors.text,
  fontSize: '16px'
}

export default Text;
