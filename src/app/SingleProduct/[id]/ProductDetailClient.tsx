// src/app/SingleProduct/[id]/ProductDetailClient.tsx
"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "@/app/redux/slices/CartSlice";
import { Product } from "@/data/products";
import { useEffect } from "react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state:any) => state.cart.cart);

  useEffect(() => {
    console.log("Current cart contents:", cartItems);
  }, [cartItems]);
  const handleAddToCart = () => {
    const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, ""));
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: priceNumber,
        image: product.image,
      })
    );
  };
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image + badge */}
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded ${
              product.tag === "New" ? "bg-green-500" : "bg-orange-500"
            } text-white`}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            {product.price}
          </span>
          {product.discountPrice && (
            <span className="line-through text-gray-500">
              {product.discountPrice}
            </span>
          )}
        </div>
        <p className="mb-6">
          This stylish stool chair is perfect for your library or reading nook.
        </p>

        <Button onClick={handleAddToCart} variant="outline" size="lg">
          <ShoppingCart className="mr-2" /> Add to cart
        </Button>
      </div>
    </main> 
  );
}
