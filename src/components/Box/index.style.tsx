import theme from "@/theme";
import styled from "styled-components/native";
import { IBox } from "./index.d";
import { createSpaceStyle } from "@/types/Styles/Space/index.d";

const Box = styled.View<any>`
  background-color: ${({ bg }) => bg};
  border-radius: ${({ br }) => br};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  display: flex;
  border-width: ${({ bw }) => bw}px;
  ${({ bs }) => (bs ? `border-style: ${bs}` : "")};
  ${({ flexD }) => (flexD ? `flex-direction: ${flexD}` : "")};
  ${({ w }) => (w ? `width: ${w}` : "")};
  ${({ h }) => (h ? `height: ${h}` : "")};
  ${({ minW }) => (minW ? `min-width: ${minW}` : "")};
  ${({ minH }) => (minH ? `min-height: ${minH}` : "")};
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  ${(props) => createSpaceStyle(props)};
`;

Box.defaultProps = {
  bg: theme.colors.white,
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignContent: "flex-start",
  bw: 0,
};

export default Box;
