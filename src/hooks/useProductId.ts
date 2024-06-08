import { useParams } from "react-router-dom";

export function useProductId() {
  const { productId } = useParams<{ productId: string }>();

  const getProductId = () => {
    return productId?.split('=')[1] || '';
  };

  return getProductId();
}
