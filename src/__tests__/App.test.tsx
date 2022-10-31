import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App component", () => {
  test("should render App", () => {
    render(<App />);

    screen.getByText(/todos/i);

    expect(true).toBeTruthy();
  });
});
