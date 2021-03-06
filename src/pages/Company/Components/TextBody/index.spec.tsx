import React from "react";

import { render } from "@testing-library/react-native";
import TextBody from "./index";
import theme from "@/theme";

describe("@text: component checks", () => {
  it("should render effect text", () => {
    const effectCallback = jest.fn();
    render(<TextBody name={""} description={""} cnpj={""} />);

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render name View TextBody", () => {
    const { getAllByText } = render(
      <TextBody name={"Hello"} description={"Word"} cnpj={"44947443000160"} />
    );
    const elements = getAllByText(/Hello/i);
    expect(elements).toHaveLength(1); // expect 'Hello' to be on the list
  });

  it("should render description View TextBody", () => {
    const { getAllByText } = render(
      <TextBody name={"Hello"} description={"Word"} cnpj={"44947443000160"} />
    );
    const elements = getAllByText(/Word/i);
    expect(elements).toHaveLength(1); // expect 'Word' to be on the list
  });

  it("should render description View TextBody", () => {
    const { getAllByText } = render(
      <TextBody name={"Hello"} description={"Word"} cnpj={"44947443000160"} />
    );
    const elements = getAllByText(/CNPJ/i);
    expect(elements).toHaveLength(1); // expect 'CNPJ' to be on the list
    const elements2 = getAllByText(/44.947.443\/0001-60/i);
    expect(elements2).toHaveLength(1); // expect ' 44.947.443/0001-60' to be on the list
  });

  it("should render defaultProps styles View TextBody", () => {
    const { getByTestId } = render(
      <TextBody name={"Hello"} description={"Word"} cnpj={""} />
    );
    const foundBodyElement = getByTestId("testTextBody");

    expect(foundBodyElement.props.style.flex).not.toEqual(0);
    expect(foundBodyElement.props.style.flex).not.toEqual("");
    expect(foundBodyElement.props.style.flex).toEqual(1);

    expect(foundBodyElement.props.style.marginLeft).not.toEqual(0);
    expect(foundBodyElement.props.style.marginLeft).toEqual(16);
  });

  it("should render defaultProps styles Text TextBody", () => {
    const { getByTestId } = render(
      <TextBody name={"Hello"} description={"Word"} cnpj={""} />
    );
    const foundBodyElement = getByTestId("testTextBody");

    expect(foundBodyElement.props.children[1].props.color).not.toEqual(
      theme.colors.primary
    );
    expect(foundBodyElement.props.children[1].props.color).not.toEqual("");
    expect(foundBodyElement.props.children[1].props.color).toEqual(
      theme.colors.gray
    );
  });
});
