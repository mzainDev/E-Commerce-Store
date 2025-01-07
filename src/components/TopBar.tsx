import React from "react";
import { Check, ChevronDown, Info } from "lucide-react";


const TopBar = () => {
  return (
    <div className="bg-[#272343] text-white text-sm py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Announcement */}
        <p className="flex items-center text-center md:text-left gap-2">
          <Check className="w-4 h-4" />
          <span>Free Shipping On All Orders Over $50</span>
        </p>

        {/* Language Selector */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <span className="flex items-center gap-1">
            Eng <ChevronDown className="w-4 h-4" />
          </span>
          <span>FAQs</span>
          <span className="flex items-center gap-1">
            <Info className="w-4 h-4 opacity-70" />
            <span>Need Help</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
