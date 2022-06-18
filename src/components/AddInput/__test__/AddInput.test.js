import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

// unit test

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const element = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(element).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const element = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(element, { target: { value: "Go Grocery Shooping" } });
    expect(element.value).toBe("Go Grocery Shooping");
  });

  it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const element = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(element, { target: { value: "Go Grocery Shooping" } });
    const elementBtn = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(elementBtn);
    expect(element.value).toBe("");
  });
});
