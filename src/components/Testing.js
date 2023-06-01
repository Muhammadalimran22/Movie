import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import NavbarComponent from "../components/Header/NavbarComponent";

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  auth: {
    isLoggedIn: false,
  },
};
const store = mockStore(initialState);

describe("NavbarComponent", () => {
  test("renders NavbarComponent correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarComponent />
        </MemoryRouter>
      </Provider>
    );

    // Verify that the logo is rendered
    const logoElement = screen.getByText(/Movielist/i);
    expect(logoElement).toBeInTheDocument();

    // Verify that the search input is rendered
    const searchInput = screen.getByPlaceholderText(
      /What do you want to watch?/i
    );
    expect(searchInput).toBeInTheDocument();

    // Verify that the login and register buttons are rendered
    const loginButton = screen.getByText(/Login/i);
    const registerButton = screen.getByText(/Register/i);
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  test("handles search correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarComponent />
        </MemoryRouter>
      </Provider>
    );

    // Simulate typing in the search input
    const searchInput = screen.getByPlaceholderText(
      /What do you want to watch?/i
    );
    fireEvent.change(searchInput, { target: { value: "action movies" } });

    // Verify that the search input value is updated
    expect(searchInput.value).toBe("action movies");

    // Simulate submitting the search form
    const searchForm = screen.getByRole("form");
    fireEvent.submit(searchForm);

    // Verify that the navigation to the search page is triggered
    expect(window.location.pathname).toBe("/search");
    expect(window.location.search).toBe("?q=action%20movies");
  });
});
