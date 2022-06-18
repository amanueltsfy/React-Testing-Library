import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("Follower List", () => {
  beforeEach(() => {
    console.log("running before each test");
  });

  it("render one item", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("render all items", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    //screen.debug();
    expect(followerDivElement.length).toBe(1);
  });
});
