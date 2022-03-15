import React from "react";

import { render } from "@testing-library/react-native";
import Buttom from "./index";
import Text from "../Text/index.style";
import theme from "@/theme";

describe("@Buttom: component checks", () => {
  it("should render Buttom passed to children", () => {
    const { queryByText } = render(
      <Buttom>
        <Text>Hello Word!</Text>
      </Buttom>
    );

    expect(queryByText("Hello Word!")).toBeTruthy();
  });

  it("should render effect Buttom", () => {
    const effectCallback = jest.fn();
    render(
      <Buttom>
        <Text>Hello Word!</Text>
      </Buttom>
    );

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render defaultProps styles text ", () => {
    const { getByTestId } = render(
      <Buttom>
        <Text>Hello Word!</Text>
      </Buttom>
    );
    const foundBodyElement = getByTestId("testButtom");

    expect(foundBodyElement.props.style[0].color).not.toEqual(
      theme.colors.primary
    );
    expect(foundBodyElement.props.style[0].color).toEqual(theme.colors.text);

    expect(foundBodyElement.props.style[0].backgroundColor).not.toEqual(
      theme.colors.text
    );

    expect(foundBodyElement.props.style[0].backgroundColor).toEqual(
      theme.colors.primary
    );

    expect(foundBodyElement.props.style[0].width).not.toEqual("0%");
    expect(foundBodyElement.props.style[0].width).toEqual("100%");

    expect(foundBodyElement.props.style[0].borderColor).not.toEqual(
      theme.colors.text
    );
    expect(foundBodyElement.props.style[0].borderColor).toEqual(
      theme.colors.primary
    );

    expect(foundBodyElement.props.style[0].borderRadius).not.toEqual(0);
    expect(foundBodyElement.props.style[0].borderRadius).toEqual(40);
  });
});
