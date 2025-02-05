// data/products.js
import smartphone from "../assets/smarthphone.png";
import wirelessHeadphone from "../assets/wirelessHeadphone.png";
import ElectricKettle from "../assets/ElectricKettle.png";
import CoffeeMaker from "../assets/CoffeeMaker.png";
import Book from "../assets/Book.png";
import GamingConsole from "../assets/GamingConsole.png";
import Laptop from "../assets/Laptop.png";
import OfficeChair from "../assets/OfficeChair.png";
import RunningShoes from "../assets/RunningShoes.png";
import Sunglasses from "../assets/Sunglasses.png";
import TShirt from "../assets/TShirt.png";
import Backpack from "../assets/Backpack.png";
import DeskLamp from "../assets/DeskLamp.png";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: wirelessHeadphone,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    image: smartphone,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 89.99,
    image: CoffeeMaker,
    category: "Home Appliances",
  },
  {
    id: 4,
    name: "Electric Kettle",
    price: 35.99,
    image: ElectricKettle,
    category: "Home Appliances",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 59.99,
    image: RunningShoes,
    category: "Footwear",
  },
  {
    id: 6,
    name: "Backpack",
    price: 39.99,
    image: Backpack,
    category: "Accessories",
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 19.99,
    image: Sunglasses,
    category: "Accessories",
  },
  {
    id: 8,
    name: "Gaming Console",
    price: 299.99,
    image: GamingConsole,
    category: "Electronics",
  },
  {
    id: 9,
    name: "Office Chair",
    price: 129.99,
    image: OfficeChair,
    category: "Furniture",
  },
  {
    id: 10,
    name: "Desk Lamp",
    price: 24.99,
    image: DeskLamp,
    category: "Furniture",
  },
  {
    id: 11,
    name: "Laptop",
    category: "Electronics",
    price: 999,
    image: Laptop,
  },
  {
    id: 12,
    name: "T-Shirt",
    category: "Clothing",
    price: 19,
    image: TShirt,
  },
  {
    id: 13,
    name: "Book",
    category: "Books",
    price: 12,
    image: Book,
  },
];

export default products;

