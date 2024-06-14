import { TopProduct } from "../../../types/products";

interface TopProductsItemProps {
  topProduct: TopProduct;
}

export default function TopProductsItem({ topProduct }: TopProductsItemProps) {
  return (
    <div className='w-full grid grid-cols-5 font-gabarito mt-3 border-b-2 border-white/10 pb-1'>
      <p className='pt-2 pb-3'>{topProduct.product.category}</p>
      <p className='text-end pt-2 pb-3'>{topProduct.product.name}</p>
      <p className='text-end pt-2 pb-3'>${topProduct.product.price}</p>
      <p className='text-end pt-2 pb-3'>{topProduct.quantity}</p>
      <p className='text-end pt-2 pb-3'>${(topProduct.product.price * topProduct.quantity).toFixed(1)}</p>
    </div>
  );
}
