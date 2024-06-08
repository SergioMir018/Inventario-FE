import { useParams } from 'react-router-dom';

export function useOrderId() {
  const { orderId } = useParams<{ orderId: string }>();
  const { clientId } = useParams<{ clientId: string }>();

  const getOrderData = () => {
    const order = orderId?.split('=')[1] || '';
    const client = clientId?.split('=')[1] || '';
    return [order, client];
  };

  return getOrderData();
}
