import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


const FeaturedSec: React.FC = () => {
  const products = [
    {
      id: 1,
      label: "New",
      image: "/p1.jpg", // Ensure this file exists in the /public folder
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 2,
      label: "Sales",
      image: "/p2.jpg", // Ensure this file exists in the /public folder
      title: "Library Stool Chair",
      price: "$20 $30",
    },
    {
      id: 3,
      image: "/p3.jpg", // Ensure this file exists
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/p4.jpg", // Ensure this file exists
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center sm:text-left mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.png"} // Fallback to '/placeholder.png'
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
                {product.label && (
                  <div className="absolute top-4 left-4 bg-[#F5813F] text-white px-3 py-1 rounded text-xs">
                    {product.label}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center sm:text-left">
                  {product.title}
                </h3>
                <p className="text-gray-600 font-medium text-center sm:text-left">
                  {product.price}
                </p>
              </div>
              {/* Add to Cart Button */}
              <div className="mt-2 flex justify-start">
                <Link href={"./"}>
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="hover:text-teal-500"/>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSec;
