import React from "react";

import { render } from "@testing-library/react-native";
import Text from "./index";
import theme from "@/theme";

describe("@text: component checks", () => {
  it("should render text passed to children", () => {
    const { queryByText } = render(<Text>Hello Word!</Text>);

    expect(queryByText("Hello Word!")).toBeTruthy();
  });

  it("should render effect text", () => {
    const effectCallback = jest.fn();
    render(<Text>Hello Word update!</Text>);

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render defaultProps styles text ", () => {
    const { getByTestId } = render(
      <Text testID="textTestDefaultProps">Hello Word!</Text>
    );
    const foundBodyElement = getByTestId("textTestDefaultProps");
    expect(foundBodyElement.props.color).not.toEqual(theme.colors.black);
    expect(foundBodyElement.props.color).not.toEqual("");
    expect(foundBodyElement.props.color).toEqual(theme.colors.text);

    expect(foundBodyElement.props.fontSize).not.toEqual("15px");

    expect(foundBodyElement.props.fontWeight).not.toEqual("400");

    expect(foundBodyElement.props.mt).not.toEqual("1px");

    expect(foundBodyElement.props.fontSize).toEqual("16px");

    expect(foundBodyElement.props.fontWeight).toEqual("500");

    expect(foundBodyElement.props.mt).toEqual("0px");
  });

  it("should render props styles color ", () => {
    const { getByTestId } = render(
      <Text testID="textTestPropsColor" color={theme.colors.primary}>
        Hello Word!
      </Text>
    );
    const foundBodyElement = getByTestId("textTestPropsColor");
    expect(foundBodyElement.props.color).not.toEqual(theme.colors.black);
    expect(foundBodyElement.props.color).toEqual(theme.colors.primary);
  });

  it("should render props styles fontSize ", () => {
    const { getByTestId } = render(
      <Text testID="textTestPropsFontSize" fontSize="20px">
        Hello Word!
      </Text>
    );
    const foundBodyElement = getByTestId("textTestPropsFontSize");
    expect(foundBodyElement.props.fontSize).not.toEqual("16px");
    expect(foundBodyElement.props.fontSize).toEqual("20px");
  });

  it("should render props styles fontWeight", () => {
    const { getByTestId } = render(
      <Text testID="textTestPropsFontWeight" fontWeight="600">
        Hello Word!
      </Text>
    );
    const foundBodyElement = getByTestId("textTestPropsFontWeight");
    expect(foundBodyElement.props.fontWeight).not.toEqual("500");
    expect(foundBodyElement.props.fontWeight).toEqual("600");
  });

  it("should render props styles mt", () => {
    const { getByTestId } = render(
      <Text testID="textTestPropsMt" mt="20px">
        Hello Word!
      </Text>
    );
    const foundBodyElement = getByTestId("textTestPropsMt");
    expect(foundBodyElement.props.mt).not.toEqual("0px");
    expect(foundBodyElement.props.mt).not.toEqual("10x");
    expect(foundBodyElement.props.mt).toEqual("20px");
  });
});
