import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
     const helloWorldEl = await screen.findByText(/qweqwe/i);
     expect(helloWorldEl).toBeInTheDocument();
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
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    //Искуственное событие
    // fireEvent.input(input, {
    //   target: { value: "qweqwe" },
    // });
    //Приближенное к пользовательскому событие
    userEvent.type(input, "qweqwe");

    expect(screen.queryByTestId("value-elem")).toContainHTML('qweqwe');
  });
});
