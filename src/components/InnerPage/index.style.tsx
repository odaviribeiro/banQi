import styled from "styled-components/native";

export interface ICard {
  borderColor?: string;
  flexDirection?: "row" | "column";
}

export const Box = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const BoxScrollView = styled.ScrollView`
  padding-horizontal: 30px;
  flex: 1;
  padding-top: 20px;
`;
