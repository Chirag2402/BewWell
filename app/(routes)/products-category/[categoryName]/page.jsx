"use client";
import ProductList from "@/app/_components/ProuctList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Fix: Use useParams() to unwrap

function ProductCategory() {
  const params = useParams(); // ✅ Get the unwrapped params
  const categoryName = params?.categoryName; // ✅ Extract category name safely

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (!categoryName) return; // ✅ Avoid API call if category is not available
        const products = await GlobalApi.getProductsByCategory(categoryName);
        setProductList(products);
        setFilteredProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, productList]);

  return (
    <div className="pt-36 px-2 md:px-6 md:pt-48">
      {/* Search Bar */}
      <div className=" flex md:px-44">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226] text-[#6B4226]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading products...</p>
      ) : (
        <ProductList productList={filteredProducts} />
      )}
    </div>
  );
}

export default ProductCategory;
