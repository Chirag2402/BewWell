import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import ProductItemDetail from './ProductItemDetail';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


function ProductItem({ product }) {

  return (
    <div className="product-item p-2  
    flex flex-col items-center 
    justify-center gap-2 border rounded-lg
    hover:scale-105 hover:shadow-md
    transition-all ease-in-out cursor-pointer w-60">
        <Image
            src={
              product.images?.[0]?.url.startsWith("http")
                ? product.images[0].url
                : process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url
            }
          width={150}
          height={100}
          alt={product.name}
        />
      <h2>{product.name}</h2>
      <h2>&pound;{product.sellingPrice}</h2>
    
    <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="text-primary hover:text-white hover:bg-primary">
    View More
    </Button>
    </DialogTrigger>
  <DialogContent>
  <VisuallyHidden asChild>
      <DialogTitle>Product Details</DialogTitle>
    </VisuallyHidden>
    <DialogHeader>
      <DialogDescription>
        <ProductItemDetail product={product}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
  );
}

export default ProductItem;