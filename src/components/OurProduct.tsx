import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { products, Product } from "@/data/products";

export default function OurProduct() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p: Product) => (
          <div
            key={p.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover cursor-pointer"
              />
            </div>

            {/* Tag Badge */}
            {p.tag && (
              <span
                className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded ${
                  p.tag === "New"
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
                }`}
              >
                {p.tag}
              </span>
            )}

            {/* Details */}
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {p.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-indigo-600">
                  {p.price}
                </span>
                {p.discountPrice && (
                  <span className="text-gray-500 line-through">
                    {p.discountPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart */}
              <div className="mt-4 flex justify-end">
                <Link href={"./"}>
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="hover:text-teal-500" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
