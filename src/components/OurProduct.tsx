import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    imageUrl: "/p1.jpg",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: "New",
  },
  {
    id: 2,
    imageUrl: "/p3.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
    label: "Sales",
  },
  {
    id: 3,
    imageUrl: "/p2.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: null,
  },
  {
    id: 4,
    imageUrl: "/image/h2.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: null,
  },
  {
    id: 5,
    imageUrl: "/ti1.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: "New",
  },
  {
    id: 6,
    imageUrl: "/image/h4.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
    label: "Sales",
  },
  {
    id: 7,
    imageUrl: "/Image9.png",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: null,
  },
  {
    id: 8,
    imageUrl: "/p1.jpg",
    title: "Library Stool Chair",
    price: "$20",
    originalPrice: null,
    label: null,
  },
];

const OurProducts = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Our Products
      </h2>
      <div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Label Badge */}
            {product.label && (
              <span
                className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded ${
                  product.label === "New"
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
                }`}
              >
                {product.label}
              </span>
            )}

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-indigo-600">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4 flex justify-end">
                <Link href="/CartPage">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="hover:text-teal-500" />
                </Button>
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

export default OurProducts;