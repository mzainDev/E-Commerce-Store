"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedSec from "@/components/FeaturedSec";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const SingleProduct: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="max-w-7xl pr-40 pl-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <Image
              src="/p3.png"
              alt="Library Stool Chair"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Library Stool Chair</h1>
            <p className="text-emerald-600 font-semibold text-lg mb-2">
              $20.00 USD
            </p>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>

            <Button
              onClick={() => dispatch(addToCart({}))}
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full md:w-auto"
            >
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white w-full">
          <FeaturedSec />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
