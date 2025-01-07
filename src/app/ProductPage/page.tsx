import React from "react";
import Newsletter from "./NewsLetter/page";
import Product from "./AllProduct/page";
const ProductsPage: React.FC = () => {
  return (
    <div>
      {/* All Products Section */}
      <Product/>

      {/* Newsletter and Instagram Section */}
      <Newsletter />
    </div>
  );
};

export default ProductsPage;
