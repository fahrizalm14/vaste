import { render, screen } from "@testing-library/react";
import Header from "./Components/Header";
test("renders vaste link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/VASTE.ID/i);
  expect(linkElement).toBeInTheDocument();
});
