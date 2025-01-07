/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Package, PenTool, DollarSign, RefreshCcw } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-40">
      <div className="container mx-auto space-y-12">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-teal-700 text-white p-6 sm:p-10 lg:p-20 rounded-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              About Us - Comforty
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              At Comforty, we believe the right chair can transform your space
              and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <Button className="bg-teal-600 text-white hover:bg-teal-700 flex items-center space-x-2">
              View collection
            </Button>
          </div>
          <div>
            <img
              src="/image/h4.png"
              alt="Chair Image"
              className="rounded-md w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Package className="h-8 w-8 text-teal-700" />,
                title: "Next day as standard",
                description:
                  "Order before 3pm and get your order the next day as standard.",
              },
              {
                icon: <PenTool className="h-8 w-8 text-teal-700" />,
                title: "Made by true artisans",
                description:
                  "Handmade crafted goods made with real passion and craftsmanship.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-teal-700" />,
                title: "Unbeatable prices",
                description:
                  "For our materials and quality you won't find better prices anywhere.",
              },
              {
                icon: <RefreshCcw className="h-8 w-8 text-teal-700" />,
                title: "Recycled packaging",
                description:
                  "We use 100% recycled to ensure our footprint is more manageable.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Our Popular Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/Large.png",
                title: "The Popler suede sofa",
                price: "$99.00",
              },
              {
                image: "/Parent.png",
                title: "The Dandy chair",
                price: "$99.00",
              },
              {
                image: "/Parent2.png",
                title: "The Dandy chair",
                price: "$99.00",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-md shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-md w-full h-auto object-cover mb-4"
                />
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {product.title}
                </h3>
                <p className="text-teal-700 font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
