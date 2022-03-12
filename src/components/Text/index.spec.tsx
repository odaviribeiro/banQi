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
    expect(foundBodyElement.props.style[0].color).not.toEqual(
      theme.colors.black
    );
    expect(foundBodyElement.props.style[0].color).toEqual(theme.colors.text);
  });
});
