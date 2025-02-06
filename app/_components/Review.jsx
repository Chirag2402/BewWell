import React from 'react';

const Review = () => {
  return (
    <div className="font-josefin text-[#4d331f] px-4 md:px-8 lg:px-[140px] xl:pr-[120px] py-0">
      {/* Header Section */}
      <header className="bg-[#f3e4d9] p-[10px_20px] border-b-2 border-[#d2b48c] rounded-lg">
        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] text-[#6a4e23]">
          Customer Reviews
        </h1>
        <p className="text-base md:text-lg lg:text-[1.2rem] text-[#8b5e34]">
          Hear what our customers have to say!
        </p>
      </header>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:gap-5 p-4 md:p-5 mx-auto max-w-[1200px]">
        {/* Review Card 1 */}
        <div className="bg-white border border-[#d2b48c] rounded-lg p-3 md:p-4 shadow-md text-center">
          <p className="text-sm md:text-base lg:text-[1.1rem] mb-2 md:mb-2.5 text-[#4d331f]">
            "Amazing products! The quality is unmatched, and I feel healthier already."
          </p>
          <p className="text-xs md:text-[0.9rem] text-[#8b5e34] italic">- Jane Doe</p>
        </div>

        {/* Review Card 2 */}
        <div className="bg-white border border-[#d2b48c] rounded-lg p-3 md:p-4 shadow-md text-center">
          <p className="text-sm md:text-base lg:text-[1.1rem] mb-2 md:mb-2.5 text-[#4d331f]">
            "Fast delivery and fantastic customer service. Highly recommend!"
          </p>
          <p className="text-xs md:text-[0.9rem] text-[#8b5e34] italic">- John Smith</p>
        </div>

        {/* Review Card 3 */}
        <div className="bg-white border border-[#d2b48c] rounded-lg p-3 md:p-4 shadow-md text-center">
          <p className="text-sm md:text-base lg:text-[1.1rem] mb-2 md:mb-2.5 text-[#4d331f]">
            "I've tried so many similar products, but nothing compares to this."
          </p>
          <p className="text-xs md:text-[0.9rem] text-[#8b5e34] italic">- Sarah Lee</p>
        </div>
      </div>
    </div>
  );
};

export default Review;