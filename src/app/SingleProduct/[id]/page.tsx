// src/app/SingleProduct/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <>
      <Link href="/" className="underline text-indigo-600 mb-4 block">
        ← Back to products
      </Link>

      {/* Delegate the rest to our Client Component */}
      <ProductDetailClient product={product} />
    </>
  );
}
