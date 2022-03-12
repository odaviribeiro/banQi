import theme from "@/theme";
import styled from "styled-components/native";

export interface IText {
  color?: string;
}

const Text = styled.Text<IText>`
  color: ${({ color }) => color};
`;

Text.defaultProps = {
 color: theme.colors.text
}

export default Text;
