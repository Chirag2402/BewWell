import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import ProductList from "./_components/ProuctList";
import Brand from "./_components/Brand";
import Review from "./_components/Review";

export default async function Home() {

  const sliderList = await GlobalApi.getSlider();

  const productList = await GlobalApi.getAllProducts();

  const brand = await GlobalApi.getBrands();

  return (
      <div className="pt-36 px-2 md:px-6 md:pt-48 ">
        <div className="md:pb-4">
       <Slider sliderList = {sliderList}/>
       </div>
      {/* <div className=" md:px-28 md:p-8">
       <h2 className='text-[#6B4226] text-2xl font-semibold pb-5 flex justify-center'>Our Popular Products</h2>
       <ProductList productList={productList}/>
       </div> */}
       <div className="pt-4 md:px-40">
       <Brand brand = {brand}/>
       </div>
       <div className="pt-4">
      <Review/>
       </div>
      </div>
  );
}
