import React from "react";

import { render } from "@testing-library/react-native";
import InnerPage from "./index";
import Text from "../Text/index.style";

describe("@text: component checks", () => {
  it("should render InnerPage passed to children", () => {
    const { queryByText } = render(
      <InnerPage>
        <Text>Hello Word!</Text>
      </InnerPage>
    );

    expect(queryByText("Hello Word!")).toBeTruthy();
  });

  it("should render effect InnerPage", () => {
    const effectCallback = jest.fn();
    render(
      <InnerPage>
        <Text>Hello Word!</Text>
      </InnerPage>
    );

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render defaultProps styles text ", () => {
    const { getByTestId } = render(
      <InnerPage>
        <Text>Hello Word!</Text>
      </InnerPage>
    );
    const foundBodyElement = getByTestId("testInnerPage");

    expect(foundBodyElement.props.style.paddingHorizontal).not.toEqual(0);
    expect(foundBodyElement.props.style.paddingHorizontal).toEqual(30);

    expect(foundBodyElement.props.style.flex).not.toEqual(0);
    expect(foundBodyElement.props.style.flex).toEqual(1);

    expect(foundBodyElement.props.style.paddingTop).not.toEqual(0);
    expect(foundBodyElement.props.style.paddingTop).toEqual(20);
  });
});
