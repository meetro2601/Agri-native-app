import { categoryType } from "../types";
import { fruitsList } from "./Fruits";
// import vegetables from "../../assets/Images/vegetables.jpg";
// import fruits from "../../assets/Images/fruits.jpg";
// import pulses from "../../assets/Images/pulses.jpg";
// import spices from "../../assets/Images/spices.jpg";
// import oilSeeds from "../../assets/Images/oil-seeds.jpg";
// import oilFat from "../../assets/Images/oils-and-fats.jpg";
// import dryFruits from "../../assets/Images/dry-fruits.jpg";
// import beverages from "../../assets/Images/beverages.jpg";
// import cereals from "../../assets/Images/cereals.jpg";
import { vegetablesList } from "./VegetablesList";

export const categoryList: categoryType[] = [
  {
    id: 1,
    category: "Vegetables",
    imgSrc:
      "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    list: vegetablesList,
  },
  {
    id: 2,
    category: "Fruits",
    imgSrc:
      "https://images.pexels.com/photos/3091619/pexels-photo-3091619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    list: fruitsList,
  },
  {
    id: 3,
    category: "Pulses",
    imgSrc: "https://plus.unsplash.com/premium_photo-1664007711002-69f7fbe493ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    list:[]
  },
  {
    id: 4,
    category: "Spices",
    imgSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    list:[]
  },
  {
    id: 5,
    category: "Cereals",
    imgSrc: "https://img.freepik.com/free-photo/spoon-ingredients-full-flour_23-2149482595.jpg?w=826&t=st=1692862278~exp=1692862878~hmac=b8b5011bb147d5d502fbd4bc816b174d215bd752fa36b24f434e6ea63c7b0aae",
    list:[]
  },
  {
    id: 6,
    category: "Oil Seeds",
    imgSrc: "https://img.freepik.com/free-photo/various-spilled-dried-fruits-from-jar-white-background_23-2147907046.jpg?w=360&t=st=1692861582~exp=1692862182~hmac=6e3899015514e4de730ee89f4b466f80b7b1a1accbb6d9d6701d970b99b6d07f",
    list:[]
  },
  {
    id: 7,
    category: "Dry Fruits",
    imgSrc: "https://img.freepik.com/free-photo/close-up-bowl-filled-with-nuts_23-2148675572.jpg",
    list:[]
  },
  {
    id: 8,
    category: "Oils & Fats",
    imgSrc: "https://img.freepik.com/free-photo/oil-ripe-fresh-avocado-rustic-wooden-table_123827-21380.jpg?w=826&t=st=1692879017~exp=1692879617~hmac=45d8b401cbc76f14d2b649c254c9165b56428d81fffa49b2a1ee11b6c21873a5",
    list:[]
  },
  {
    id: 9,
    category: "Beverages",
    imgSrc: "https://img.freepik.com/free-photo/close-up-selection-fresh-coffee-beans_23-2148463953.jpg?w=826&t=st=1692880381~exp=1692880981~hmac=5ae0a00d4f4bcdddcdc3a0647ab0ceee00247c1d9deee611fd8620a9058a692f",
    list:[]
  },
  //   {
  //     id: 2,
  //     category: "Vegetables",
  //     imgSrc: vegetables,
  //   },
];
