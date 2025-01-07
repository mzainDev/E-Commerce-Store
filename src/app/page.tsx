import CompanyLogos from "@/components/CompanyLogos";
import FeaturedSec from "@/components/FeaturedSec";
import HeroSection from "@/components/HeroSection";
import HotCategory from "@/components/HotCategory";
import OurProduct from "@/components/OurProduct";
import TopCatagory from "@/components/TopCatagory";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <HeroSection/>
      <CompanyLogos/>
      <FeaturedSec/>
      <TopCatagory/>
      <HotCategory/>
      <OurProduct/>
    </div>
    </>
  );
}
