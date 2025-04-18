/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CartPage: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/ti3.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/p3.png",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-40">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-md"
                />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p className="mb-1">Variant: {item.variant}</p>
                    <p className="mb-1">Size: {item.size}</p>
                    <p className="mb-1">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-xl font-bold mt-4 sm:mt-0">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Remove
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Update
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2 text-sm">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full">
                Member Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
