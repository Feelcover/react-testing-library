import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe('router', () => {
    test('router-test', () => { 
      render(
        <MemoryRouter>
      <App />
      </MemoryRouter>);
      fireEvent.click(screen.getByTestId('about-link'));
      expect(screen.getByTestId("about-page")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('main-link'));
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
     }),
     test('err-test', () => { 
      render(
        <MemoryRouter initialEntries={['/qweqwe']}>
      <App />
      </MemoryRouter>);
      expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
     })
  });
  