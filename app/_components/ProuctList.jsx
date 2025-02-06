import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }) {
  return (
    <div className="p-4 md:px-8 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(productList) && productList.length > 0 ? (
          productList.slice(0, 4).map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
