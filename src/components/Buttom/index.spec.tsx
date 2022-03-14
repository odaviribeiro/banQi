import React from "react";

import { render } from "@testing-library/react-native";
import Buttom from "./index";
import Text from "../Text/index.style";
import theme from "@/theme";

describe("@text: component checks", () => {
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

    expect(foundBodyElement.props.color).not.toEqual(theme.colors.primary);
    expect(foundBodyElement.props.color).toEqual(theme.colors.text);

    expect(foundBodyElement.props.backgroundColor).not.toEqual(
      theme.colors.text
    );
    expect(foundBodyElement.props.backgroundColor).toEqual(
      theme.colors.primary
    );

    expect(foundBodyElement.props.w).not.toEqual("0%");
    expect(foundBodyElement.props.w).toEqual("100%");

    expect(foundBodyElement.props.borderColor).not.toEqual(theme.colors.text);
    expect(foundBodyElement.props.borderColor).toEqual(theme.colors.primary);

    expect(foundBodyElement.props.borderRadius).not.toEqual("0px");
    expect(foundBodyElement.props.borderRadius).toEqual("40px");
  });
});
