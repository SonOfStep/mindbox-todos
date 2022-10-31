import { render, screen } from "@testing-library/react";

import ListTodo from "../components/ListTodo";
import { EStatus, ITodo } from "../App";

const todos: ITodo[] = [
  { id: 0, text: "First Todo", status: EStatus.ACTIVE },
  { id: 1, text: "Second Todo", status: EStatus.COMPLETED },
  { id: 2, text: "Third Todo", status: EStatus.ACTIVE },
];

const toggleStatus = jest.fn();

describe("Todo list component", () => {
  test("Todo list render", () => {
    render(<ListTodo todos={todos} toggleStatus={toggleStatus} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/First Todo/)).toBeInTheDocument();
    expect(screen.getByText(/Second Todo/)).toBeInTheDocument();
    expect(screen.getByText(/Third Todo/)).toBeInTheDocument();
  });

  test("Todo list is empty", () => {
    const { container } = render(<ListTodo />);
    const SVGElement = container.querySelector("svg");

    expect(SVGElement).toBeInTheDocument();
    expect(screen.queryByText(/The todo list is empty/i)).toBeInTheDocument();
  });
});
