import React from "react";

import { render } from "@testing-library/react-native";
import Address from "./index";

const address = {
  city: "city",
  complement: "complement",
  neighborhood: "neighborhood",
  number: "01",
  state: "SP",
  street: "das flores",
  zip: "12345-000",
};

describe("@text: component checks", () => {
  it("should render effect text", () => {
    const effectCallback = jest.fn();
    render(<Address address={address} />);

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render city View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/city/i);
    expect(elements).toHaveLength(1); // expect 'city' to be on the list
  });

  it("should render neighborhood View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/neighborhood/i);
    expect(elements).toHaveLength(1); // expect 'neighborhood' to be on the list
  });

  it("should render number View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/01/i);
    expect(elements).toHaveLength(1); // expect '01' to be on the list
  });

  it("should render state View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/SP/i);
    expect(elements).toHaveLength(1); // expect 'SP' to be on the list
  });

  it("should render street View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/das flores/i);
    expect(elements).toHaveLength(1); // expect 'das flores' to be on the list
  });

  it("should render zip View TextBody", () => {
    const { getAllByText } = render(<Address address={address} />);

    const elements = getAllByText(/12345-000/i);
    expect(elements).toHaveLength(1); // expect '12345-000' to be on the list
  });
});
