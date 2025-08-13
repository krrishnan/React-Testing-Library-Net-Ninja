import { screen, render } from "@testing-library/react";
import Header from "../Header";

//GET BY
test("Should render the title same as prop", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test("Accessing the header using get by role", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByRole("heading", { name: "my header" });
  expect(headingElement).toBeInTheDocument();
});

test("Accessing the element with title prop", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByTitle("header");
  expect(headingElement).toBeInTheDocument();
});

test("Accessing the header with data-testid prop", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByTestId("header1");
  expect(headingElement).toBeInTheDocument();
});

//FIND BY
test("Should render the title same as prop", async () => {
  render(<Header title="my header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//QUERY BY
test("Should render the title same as prop", () => {
  render(<Header title="my header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

//GETALL BY
test("Should render the headers length as 2", () => {
  render(<Header title="my header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
