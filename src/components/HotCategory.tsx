import Image from "next/image";

const categories = [
  {
    id: 1,
    imageUrl: "/image/h5.png",
    alt: "Orange Modern Chair",
  },
  {
    id: 2,
    imageUrl: "/image/h3.png",
    alt: "White Armchair",
  },
  {
    id: 3,
    imageUrl: "/image/h4.png",
    alt: "White Wooden Chair",
  },
  {
    id: 4,
    imageUrl: "/image/h2.png",
    alt: "Grey Upholstered Chair",
  },
  {
    id: 5,
    imageUrl: "/image/h1.png",
    alt: "White Wooden Chair 2",
  },
];

const HotCategory = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-16 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-6">
        Hot Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Large Image on the Left */}
        <div className="sm:col-span-2 row-span-2 h-64 sm:h-[400px] lg:h-[600px]">
          <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={categories[0].imageUrl}
              alt={categories[0].alt}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Four Smaller Images on the Right */}
        <div className="grid grid-cols-2 gap-4">
          {categories.slice(1).map((item) => (
            <div
              key={item.id}
              className="h-32 sm:h-40 lg:h-64 w-full overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCategory;
