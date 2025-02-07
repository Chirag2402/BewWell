'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Brand({ brand }) {
  const [showAll, setShowAll] = useState(false);
  const displayedBrands = showAll ? brand : brand.slice(0, 6);

  return (
    <div className='bg-[#f9f9f9] py-8 rounded-lg'>
      <h1 className="text-[#6A4A23] text-2xl font-semibold mb-4 flex justify-center">
        Choose Your Brand
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 justify-items-center">
        {displayedBrands.length > 0 ? displayedBrands.map((brandData) => {
          const imageUrl = brandData?.image?.url;
          
          // ✅ Fix: Use image URL directly if it's an absolute URL (Cloudinary), otherwise prepend Strapi URL
          const fullImageUrl = imageUrl?.startsWith("http") 
            ? imageUrl 
            : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${imageUrl}`;

          return (
            <div key={brandData.id} className="w-full flex justify-center items-center p-2">
              {imageUrl ? (
                <Image 
                  src={fullImageUrl} 
                  width={115} 
                  height={40} 
                  alt={brandData.name || "Brand Image"} 
                  className="object-contain"
                  unoptimized // Helps if Cloudinary is handling optimization
                />
              ) : (
                <p className="text-gray-500">No Image</p>
              )}
            </div>
          );
        }) : (
          <div className="col-span-full text-center">
            <p>No brands available</p>
          </div>
        )}
      </div>

      {brand.length > 6 && (
        <div className="mt-4 text-center">
          <Button 
            className="bg-[#6A4A23] text-white hover:bg-[#8B5E34] transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Brand;
