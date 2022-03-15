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
});
