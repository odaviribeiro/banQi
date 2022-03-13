import theme from "@/theme";
import styled from "styled-components/native";

export interface ICard {
  borderColor?: string;
}

const Card = styled.View<ICard>`
  border-radius: 10px;
  border-width: 0.5px;
  border-color: ${({ borderColor }) => borderColor};
  padding-horizontal: 10px;
  padding-vertical: 20px;
  margin-bottom: 20px;
  flex-direction: row;
`;

Card.defaultProps = {
  borderColor: theme.colors.secondary,
};

export default Card;
