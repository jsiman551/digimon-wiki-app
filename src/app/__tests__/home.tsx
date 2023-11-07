import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../page";

describe("Home Component", () => {
  it("renders correctly", () => {
    render(<Home />);
    expect(screen.queryByTestId("homeContainer")).toBeInTheDocument();
  });
});
