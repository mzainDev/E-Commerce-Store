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
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beauty",
    price: "$20",
    image: "/p1.jpg",
    tag: "New",
    discountPrice: null,
    description:
      "A stylish and comfortable stool chair perfect for libraries and reading nooks. Features a sturdy wooden frame and cushioned seat.",
  },
  {
    id: 2,
    name: "Beauty",
    price: "$20",
    image: "/p2.jpg",
    tag: "Sales",
    discountPrice: "$39",
    description:
      "Modern stool chair with ergonomic design, ideal for both casual seating and decorative purposes.",
  },
  {
    id: 3,
    name: "Beauty",
    price: "$20",
    image: "/p3.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Classic wooden stool chair with a minimalist design, suitable for various interior styles.",
  },
  {
    id: 4,
    name: "Gaming",
    price: "$20",
    image: "/p4.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Versatile stool chair with a contemporary look, perfect for small spaces and modern interiors.",
  },
  {
    id: 5,
    name: "Shampoo",
    price: "$20",
    image: "/ti1.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Elegant stool chair featuring a unique design and premium materials for lasting comfort.",
  },
  {
    id: 6,
    name: "Hair Rollers",
    price: "$20",
    image: "/ti2.jpg",
    tag: "New",
    discountPrice: null,
    description:
      "Innovative stool chair with a sleek profile and comfortable seating experience.",
  },
  {
    id: 7,
    name: "Customized",
    price: "$20",
    image: "/ti3.jpg",
    tag: "Sales",
    discountPrice: "$39",
    description:
      "Premium stool chair with exceptional craftsmanship and attention to detail.",
  },
  {
    id: 8,
    name: "Mix Polish",
    price: "$20",
    image: "/image9.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Traditional stool chair with a timeless design and reliable construction.",
  },
  {
    id: 9,
    name: "Home & Kitchen",
    price: "$20",
    image: "/image/h1.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Contemporary stool chair that combines style and functionality for everyday use.",
  },
  {
    id: 10,
    name: "Nill Polish",
    price: "$20",
    image: "/image/h2.jpg",
    tag: null,
    discountPrice: null,
    description:
      "Modern stool chair with a unique design that adds character to any space.",
  },
  {
    id: 11,
    name: "Men Cream",
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
                <Link href={`/ProductPage/${product.id}`}>
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
                <p className="text-xs text-gray-600 mt-1 text-center sm:text-left">
                  {product.description}
                </p>
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
