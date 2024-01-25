import ProductsPage from "@/components/shop/ProductsPage";
import React from "react";

const AllProductShop = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1240px] mx-auto">
      <div className="sidebar col-span-3">
        <h3 className="font-bold mb-3">Product Category</h3>
      </div>
      <div className="products col-span-9">
        <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
        <div>
          <ProductsPage />
        </div>
      </div>
    </div>
  );
};

export default AllProductShop;
