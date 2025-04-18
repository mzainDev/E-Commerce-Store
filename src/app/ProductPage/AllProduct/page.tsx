import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: "New" | "Sales" | null;
  discountPrice: string | null;
}

const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p1.jpg",
    tag: "New",
    discountPrice: null,
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p2.png",
    tag: "Sales",
    discountPrice: "$39",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p3.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    image: "/p4.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti1.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti2.png",
    tag: "New",
    discountPrice: null,
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: "$20",
    image: "/ti3.png",
    tag: "Sales",
    discountPrice: "$39",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image9.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h1.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h2.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h3.png",
    tag: null,
    discountPrice: null,
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: "$20",
    image: "/image/h5.png",
    tag: null,
    discountPrice: null,
  },
];

const AllProducts: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center sm:text-left">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative group">
                <Link href="./SingleProduct">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 text-center sm:text-left">
                  {product.name}
                </h3>
                <div className="flex justify-center sm:justify-start items-center mt-2">
                  <span className="text-lg font-bold text-gray-800">
                    {product.price}
                  </span>
                  {product.discountPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.discountPrice}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex justify-center sm:justify-end">
                  <Link href="/CartPage">
                    <button
                      aria-label={`Add ${product.name} to cart`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-teal-500"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span className="text-sm hidden sm:inline">
                        Add to Cart
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
