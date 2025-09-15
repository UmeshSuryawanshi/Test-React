import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contat page test cases", () => {
  test("Should render contact page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should render button in the contact page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should render input text in the contact page", () => {
    render(<Contact />);

    const nameInputText = screen.getByPlaceholderText("Name");

    expect(nameInputText).toBeInTheDocument();
  });

  test("Should render 2 input text in the contact page", () => {
    render(<Contact />);

    const inputTexts = screen.getAllByRole("textbox");

    expect(inputTexts.length).toBe(2);
  });
});
