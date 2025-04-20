"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { use } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: "New" | "Sales" | null;
  discountPrice: string | null;
  description: string;
}

// This would typically come from an API or database
const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p1.jpg",
    tag: "New",
    discountPrice: null,
    description:
      "A stylish and comfortable stool chair perfect for libraries and reading nooks. Features a sturdy wooden frame and cushioned seat.",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p2.jpg",
    tag: "Sales",
    discountPrice: "$39",
    description:
      "Modern stool chair with ergonomic design, ideal for both casual seating and decorative purposes.",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p3.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Classic wooden stool chair with a minimalist design, suitable for various interior styles.",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p4.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Versatile stool chair with a contemporary look, perfect for small spaces and modern interiors.",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti1.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Elegant stool chair featuring a unique design and premium materials for lasting comfort.",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti2.jpg",
    tag: "New",
    discountPrice: null,
    description:
      "Innovative stool chair with a sleek profile and comfortable seating experience.",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti3.jpg",
    tag: "Sales",
    discountPrice: "$39",
    description:
      "Premium stool chair with exceptional craftsmanship and attention to detail.",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image9.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Traditional stool chair with a timeless design and reliable construction.",
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h1.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Contemporary stool chair that combines style and functionality for everyday use.",
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h2.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Modern stool chair with a unique design that adds character to any space.",
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h3.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Stylish stool chair featuring premium materials and comfortable seating.",
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h5.png",
    tag: null,
    discountPrice: null,
    description:
      "Elegant stool chair with a sophisticated design and superior comfort.",
  },

  // ... other products
];

export default function SingleProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { addToCart } = useCart();
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
            {product.tag && (
              <span
                className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white rounded ${
                  product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {product.tag}
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-800">
                {product.price}
              </span>
              {product.discountPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {product.discountPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center space-x-2 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
