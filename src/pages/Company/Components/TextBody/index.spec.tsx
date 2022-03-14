import React from "react";

import { render } from "@testing-library/react-native";
import TextBody from "./index";
import theme from "@/theme";

describe("@text: component checks", () => {
  it("should render effect text", () => {
    const effectCallback = jest.fn();
    render(<TextBody name={""} description={""} />);

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render defaultProps View TextBody", () => {
    const { getByTestId } = render(
      <TextBody name={"Hello"} description={"Word"} />
    );
    const foundBodyElement = getByTestId("testTextBody");

    expect(foundBodyElement.props.children[0].props.children).not.toEqual(
      "Hello Word"
    );
    expect(foundBodyElement.props.children[0].props.children).not.toEqual(
      "Word"
    );
    expect(foundBodyElement.props.children[0].props.children).toEqual("Hello");

    expect(foundBodyElement.props.children[1].props.children).not.toEqual(
      "Hello Word"
    );
    expect(foundBodyElement.props.children[1].props.children).not.toEqual(
      "Hello"
    );
    expect(foundBodyElement.props.children[1].props.children).toEqual("Word");
  });

  it("should render defaultProps styles View TextBody", () => {
    const { getByTestId } = render(
      <TextBody name={"Hello"} description={"Word"} />
    );
    const foundBodyElement = getByTestId("testTextBody");

    expect(foundBodyElement.props.style.flex).not.toEqual(0);
    expect(foundBodyElement.props.style.flex).not.toEqual("");
    expect(foundBodyElement.props.style.flex).toEqual(1);

    expect(foundBodyElement.props.style.marginLeft).not.toEqual(0);
    expect(foundBodyElement.props.style.marginLeft).toEqual(24);
  });

  it("should render defaultProps styles Text TextBody", () => {
    const { getByTestId } = render(
      <TextBody name={"Hello"} description={"Word"} />
    );
    const foundBodyElement = getByTestId("testTextBody");

    expect(foundBodyElement.props.children[1].props.color).not.toEqual(
      theme.colors.primary
    );
    expect(foundBodyElement.props.children[1].props.color).not.toEqual("");
    expect(foundBodyElement.props.children[1].props.color).toEqual(
      theme.colors.textSecundary
    );
  });
});
