import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { withPromotedCard } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const cardName = screen.getByText("Big Bowl");

  expect(cardName).toBeInTheDocument();
});

it("Should render RestaurantCard component with popular label", () => {
  //H.W. test HOC as withPromotedCard
  const RestaurantCardPromoted = withPromotedCard(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const promotionLabel = screen.getByText("Popular");

  expect(promotionLabel).toBeInTheDocument();

  const cardName = screen.getByText("Big Bowl");

  expect(cardName).toBeInTheDocument();
});
