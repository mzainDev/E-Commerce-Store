"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartCounter() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link href="/CartPage" className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-teal-500 transition-colors" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
