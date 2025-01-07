import { Trophy, ShieldCheck, Headphones } from "lucide-react";

const ServiceFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Trophy className="h-10 w-10 text-gray-700" />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      id: 2,
      icon: <ShieldCheck className="h-10 w-10 text-gray-700" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      id: 3,
      icon: <Headphones className="h-10 w-10 text-gray-700" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4"
            >
              <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
