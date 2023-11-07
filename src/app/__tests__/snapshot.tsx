import Home from "../page";
import { render } from "@testing-library/react";

it("renders Home component", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
