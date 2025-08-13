import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button");
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

it("should see the aded todo in the todo list", () => {
  render(<MockTodo />);
  addTodo(["new todo task"]);
  const divElement = screen.getByText(/new todo task/i);
  expect(divElement).toBeInTheDocument();
});

it("should see the aded todo in the todo list", () => {
  render(<MockTodo />);
  addTodo(["new todo task", "new todo task1", "new todo task2"]);
  const divElements = screen.getAllByTestId("task-container");
  expect(divElements.length).toBe(3);
});

it("should not have the todo-item-active classname when initially rendered", () => {
  render(<MockTodo />);
  addTodo(["new todo task"]);
  const divElement = screen.getByText(/new todo task/i);
  expect(divElement).not.toHaveClass("todo-item-active");
});

it("should have the todo-item-active classname when clicked todo", () => {
  render(<MockTodo />);
  addTodo(["new todo task"]);
  const divElement = screen.getByText(/new todo task/i);
  fireEvent.click(divElement);
  expect(divElement).toHaveClass("todo-item-active");
});
