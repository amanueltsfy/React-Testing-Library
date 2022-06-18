import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter", () => {
  describe("Functionality 1", () => {
    it("should render the correct amount of incomplete task", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const parElement = screen.getByText(/5 tasks left/i);
      expect(parElement).toBeInTheDocument();
    });
  });
  describe("Functionality 2", () => {
    it('should render "task" when the number of incomplete task is one', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const parElement = screen.getByText(/1 task left/i);
      expect(parElement).toBeTruthy();
    });
  });
});

// it('should render "task" when the number of incomplete task is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const parElement = screen.getByText(/1 task left/i);
//   expect(parElement).toBeVisible();
// });

// it('should render "task" when the number of incomplete task is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const parElement = screen.getByText(/1 task left/i);
//   expect(parElement).toContainHTML("p");
// });

// it('should render "task" when the number of incomplete task is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const parElement = screen.getByTestId("para");
//   expect(parElement).toHaveTextContent("1 task left");
// });

// it('should render "task" when the number of incomplete task is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const parElement = screen.getByTestId("para");
//   expect(parElement.textContent).toBe("1 task left");
// });

// paraElement.value for input elements
// it('should render "task" when the number of incomplete task is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const parElement = screen.getByTestId("para");
//     expect(parElement.textContent).toBe("1 task left");
//   });
