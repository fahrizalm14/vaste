import { render, screen } from "@testing-library/react";
import Header from "./Components/Header";
test("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/VASTE.ID/i);
  expect(linkElement).toBeInTheDocument();
});
