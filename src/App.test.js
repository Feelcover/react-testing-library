import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("app test", () => {
  test("renders learn react link", async () => {
    render(<App />);
    // const helloWorldEl = screen.getByText(/hello world/i);
    // const button = screen.getByRole("button");
    // const input = screen.getByPlaceholderText(/введите значение.../i);
    // expect(helloWorldEl).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
    screen.debug();
     const helloWorldEl = await screen.findByText(/qweqwe/i);
     expect(helloWorldEl).toBeInTheDocument();
    screen.debug();
  }),
  test("click", async () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  }),
  test("input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/введите значение.../i);
    screen.debug();
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    screen.debug();
    fireEvent.input(input, {
      target: { value: "qweqwe" },
    });
    expect(screen.queryByTestId("value-elem")).toContainHTML('qweqwe');
  });
});
