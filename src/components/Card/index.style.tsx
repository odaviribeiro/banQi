import theme from "@/theme";
import styled from "styled-components/native";

export interface ICard {
  borderColor?: string;
  flexDirection?: "row" | "column";
}

const Card = styled.View<ICard>`
  border-radius: 10px;
  border-width: 0.5px;
  border-color: ${({ borderColor }) => borderColor};
  padding-horizontal: 10px;
  padding-vertical: 20px;
  margin-bottom: 20px;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

Card.defaultProps = {
  borderColor: theme.colors.secondary,
  flexDirection: "column",
};

export default Card;
