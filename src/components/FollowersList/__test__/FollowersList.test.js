import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

it("should render the first card", async () => {
  render(<MockFollowersList />);
  const followerDivElement = await screen.findByTestId(/follower-item0/i);
  expect(followerDivElement).toBeInTheDocument();
});

it("should render 5 followers", async () => {
  render(<MockFollowersList />);
  const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  expect(followerDivElements.length).toBe(5);
});
