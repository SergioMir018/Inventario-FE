import { useEffect, useState } from 'react';
import { OrderProduct, Product } from '../../../types/http-types';
import { BASE_URL } from '../../../types/constants,';
import { fetchProductById } from '../../../api/admin';

interface OrderDetailsTableItemProps {
  orderProduct: OrderProduct;
}

export default function OrderDetailsTableItem({
  orderProduct,
}: OrderDetailsTableItemProps) {

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
      const getProduct = async () => {
        const fetchedProduct = await fetchProductById(orderProduct.productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        }
      };

      getProduct();
    }, [orderProduct.productId]);

  return (
    <tr key={product?.id}>
      <td className='py-2 px-4 border-b'>
        <div className='flex items-center gap-4'>
          <img
            src={`${BASE_URL}/${product?.photo}`}
            alt={product?.name}
            width={64}
            height={64}
            className='rounded-md'
          />
          <div>
            <h3 className='font-medium'>{product?.name}</h3>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>
              Id: {product?.id}
            </p>
          </div>
        </div>
      </td>
      <td className='py-2 px-4 border-b text-end'>{orderProduct.quantity}</td>
      <td className='py-2 px-4 border-b text-end'>${product?.price}</td>
      <td className='py-2 px-4 border-b text-end'>
        ${((product?.price as number) * orderProduct.quantity).toFixed(2)}
      </td>
    </tr>
  );
}
