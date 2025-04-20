// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: "New" | "Sales" | null;
  discountPrice: string | null;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Beauty",
    price: "$20",
    image: "/p1.jpg",
    tag: "New",
    discountPrice: null,
  },
  {
    id: 2,
    name: "Beauty",
    price: "$20",
    image: "/p2.jpg",
    tag: "Sales",
    discountPrice: "$39",
  },
  {
    id: 3,
    name: "Beauty",
    price: "$20",
    image: "/p3.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 4,
    name: "Gaming",
    price: "$20",
    image: "/p4.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 5,
    name: "Shampoo",
    price: "$20",
    image: "/ti1.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 6,
    name: "Hair Rollers",
    price: "$20",
    image: "/ti2.jpg",
    tag: "New",
    discountPrice: null,
  },
  {
    id: 7,
    name: "Customized",
    price: "$20",
    image: "/ti3.jpg",
    tag: "Sales",
    discountPrice: "$39",
  },
  {
    id: 8,
    name: "Shampoo",
    price: "$20",
    image: "/image9.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 9,
    name: "Home & Kitchen",
    price: "$20",
    image: "/image/h1.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 10,
    name: "Nill Polish",
    price: "$20",
    image: "/image/h2.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 11,
    name: "Men Cream",
    price: "$20",
    image: "/image/h3.jpg",
    tag: null,
    discountPrice: null,
  },
  {
    id: 12,
    name: "Men Cream",
    price: "$20",
    image: "/image/h5.jpg",
    tag: null,
    discountPrice: null,
  },
];
