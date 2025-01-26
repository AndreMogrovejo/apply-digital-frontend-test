import { ShoppingCartGame } from "./contexts/useShoppingCart";

const cartList: ShoppingCartGame[] = [
  {
    id: "28",
    genre: "Sports",
    image: "/game-images/nba2k21.jpeg",
    name: "NBA 2K21",
    description: "Experience the next generation of basketball simulation.",
    price: 59.99,
    isNew: false,
    quantity: 1,
  },
  {
    id: "29",
    genre: "MMORPG",
    image: "/game-images/guildwars2.jpeg",
    name: "Guild Wars 2",
    description:
      "A living, breathing online world where adventure awaits around every corner.",
    price: 70.0,
    isNew: true,
    quantity: 1,
  },
];

export const mockCartList = () => {
  return cartList;
};
