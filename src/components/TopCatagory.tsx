import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TopCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      image: "/ti1.png",
      title: "Wing Chair",
      productCount: 3584,
    },
    {
      id: 2,
      image: "/ti2.png",
      title: "Wooden Chair",
      productCount: 157,
    },
    {
      id: 3,
      image: "/ti3.png",
      title: "Desk Chair",
      productCount: 154,
    },
  ];

  return (
    <Card className="w-full px-4 sm:px-6 lg:px-16 py-6">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
          Top Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={category.image}
                alt={category.title}
                className="h-48 sm:h-64 w-full object-cover"
                width={500}
                height={256}
              />
              <div className="p-4 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-medium mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium">
                  {category.productCount} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCategories;
