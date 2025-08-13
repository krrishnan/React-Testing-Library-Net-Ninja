import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetFunction = jest.fn();
const MockAddInput = () => {
  return <AddInput setTodos={mockSetFunction} todos={[]} />;
};

it("Input element should be present in the document", () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  expect(inputElement).toBeInTheDocument();
});

it("should be able to type into input", () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  fireEvent.change(inputElement, { target: { value: "the new task" } });
  expect(inputElement.value).toBe("the new task");
});

it("should have empty input when add button is clicked", () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button");
  fireEvent.change(inputElement, { target: { value: "the new task" } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe("");
});
