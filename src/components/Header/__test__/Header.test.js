import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same test passed into title prop", () => {
  render(<Header title="My header" />);
  const headingEle = screen.getByText(/my header/i);
  expect(headingEle).toBeInTheDocument();
});

// it("should render same test passed into title prop", () => {
//   render(<Header title="My header" />);
//   const headingEle = screen.getByRole("heading");
//   expect(headingEle).toBeInTheDocument();
// });

it("should render same test passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingEle = screen.getByRole("heading", { name: "My Header" });
  expect(headingEle).toBeInTheDocument();
});

it("should render same test passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingEle = screen.getByTitle("Header", { name: "My Header" });
  expect(headingEle).toBeInTheDocument();
});

it("should render same test passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingEle = screen.getByTestId("header-1");
  expect(headingEle).toBeInTheDocument();
});

// find by

it("should render same test passed into title prop", async () => {
  render(<Header title="My header" />);
  const headingEle = await screen.findByText(/my header/i);
  expect(headingEle).toBeInTheDocument();
});

// query by

it("should render same test passed into title prop", async () => {
  render(<Header title="My header" />);
  const headingEle = screen.queryByText(/dogs/i);
  expect(headingEle).not.toBeInTheDocument();
});

it("should render same test passed into title prop", async () => {
  render(<Header title="My header" />);
  const headingEles = screen.getAllByRole("heading");
  expect(headingEles.length).toBe(2);
});
