import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 md:px-40">
      <div className="max-w-7xl mx-auto py-8 grid gap-8 grid-cols-1 md:grid-cols-4">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/image/Logoi.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-black text-2xl font-bold">Comforty</span>
          </div>

          <p className="mt-4 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="mt-4 flex space-x-4">
            {["facebook-f", "twitter", "instagram", "pinterest", "youtube"].map(
              (icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-gray-500 hover:text-teal-600"
                  aria-label={icon}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              )
            )}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold">Category</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-teal-600 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-teal-600 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <Link href="/ProductPage">
            <h3 className="text-lg font-semibold">Newsletter</h3>
          </Link>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-t-md sm:rounded-l-md sm:rounded-tr-none mb-2 sm:mb-0"
            />
            <Button className="rounded-b-md sm:rounded-r-md sm:rounded-bl-none bg-teal-600 text-white hover:bg-teal-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          <div className="flex justify-center">
            <Image
              src="/image/Group123.jpg"
              alt="PayPal"
              width={227}
              height={27}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
