import theme from "@/theme";
import styled from "styled-components/native";

export interface IText {
  color?: string;
  fontSize?: string;
  mt?: string; 
  fontWeight?: string;
}

const Text = styled.Text<IText>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ mt }) => mt};
`;

Text.defaultProps = {
  color: theme.colors.text,
  fontSize: '16px',
  fontWeight: '500',
  mt: '0px',
}

export default Text;
