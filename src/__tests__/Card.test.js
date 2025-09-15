import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_Data from "../mocks/resMenuMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import Header from "../components/Header";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_Data),
  });
});

it("Should load restaurant menu component", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <Header />
        </BrowserRouter>
        <RestaurantMenu />
        <Cart />
      </Provider>
    )
  );

  const accordian = screen.getByText("Sweet Delicacies (6)");

  fireEvent.click(accordian);

  const foodItems = screen.getAllByTestId("foodItem");

  expect(foodItems.length).toBe(6);

  const beforeAddCartCount = screen.getByText("Cart (0 - Items)");
  expect(beforeAddCartCount).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  const cartCount = screen.getByText("Cart (1 - Items)");
  expect(cartCount).toBeInTheDocument();

  fireEvent.click(addButtons[1]);

  const newCartCount = screen.getByText("Cart (2 - Items)");
  expect(newCartCount).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(8);
  //Clear Cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItem").length).toBe(6);
});
