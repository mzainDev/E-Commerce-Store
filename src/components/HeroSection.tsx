import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white rounded-bl-3xl px-6 md:pr-40 md:pl-40">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Text Content */}
        <div>
          <p className="text-sm uppercase text-gray-500 mb-4 text-center md:text-left">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="flex justify-center md:justify-start">
            <Button className="bg-teal-600 text-white hover:bg-teal-700 flex items-center space-x-2">
              <span>Shop Now</span>
              <span>&rarr;</span>
            </Button>
          </div>
        </div>

        {/* Right Section: Chair Image */}
        <div className="flex justify-center">
          <Image
            src="/image/Pimage.png"
            alt="Chair"
            width={400}
            height={400}
            priority
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
