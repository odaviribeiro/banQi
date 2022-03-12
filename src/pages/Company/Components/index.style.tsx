import styled from "styled-components/native";

interface IBox {}

const Box = styled.View<IBox>`
  border-radius: 10px;
  border-width: 0.5px;
  padding-horizontal: 10px;
  padding-vertical: 20px;
  margin-bottom: 20px;
  flex-direction: row;
`;

Box.defaultProps = {};

export default Box;
