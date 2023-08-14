import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

const HeaderProps = {
  switchTheme: jest.fn(),
  setPickedCategory: jest.fn(),
  pickedCategory: "CONTACT",
};

describe("my beverage", () => {
  test("matches snapshot", () => {
    const header = render(<Header {...HeaderProps} />);
    expect(header).toMatchSnapshot();
  });
  test("switches theme", () => {
    const { container } = render(<Header {...HeaderProps} />);
    const switcher = container.querySelector(`.react-switch-bg`)!;
    fireEvent.click(switcher);
    expect(HeaderProps.switchTheme).toBeCalledTimes(1);
  });
  test("changes category", () => {
    const { container } = render(<Header {...HeaderProps} />);
    const category = container.querySelectorAll(`.header__nav-category`)!;
    fireEvent.click(category[0]);
    expect(HeaderProps.setPickedCategory).toBeCalledTimes(1);
  });
});
