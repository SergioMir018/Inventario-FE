import { useEffect, useState } from 'react';
import PopUp from '../../shared/pop-up';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../api/user';
import OrderDetailsTableItem from './order-details-table-item';
import { HTTPOrderResponse } from '../../../types/http-types';
import { fetchOrderById } from '../../../api/admin';
import Badge from '../../shared/badge';

interface OrderDetailProps {
  orderId: string;
  clientId: string;
}

export default function OrderDetails({ orderId, clientId }: OrderDetailProps) {
  const [clientName, setClientName] = useState<string | null>(null);
  const [order, setOrder] = useState<HTTPOrderResponse | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getClientName = async (id: string) => {
      try {
        const userData = await fetchUser(id);
        setClientName(userData.name);
      } catch (error) {
        console.error(error);
      }
    };

    const getOrder = async (orderId: string) => {
      try {
        const orderData = await fetchOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error(error);
      }
    };

    getOrder(orderId)
    getClientName(clientId);
  }, [clientId, orderId]);

  const handleAcceptAction = () => {
    navigate('orders');
  };

  return (
    <PopUp>
      <div className='bg-dark rounded-md grid gap-8 max-w-4xl mx-auto py-8 px-8 md:px-5'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex gap-16'>
              <h1 className='text-2xl font-bold'>{order?.name}</h1>
              <Badge text={order?.status} />
            </div>
            <p className='text-gray-500 dark:text-gray-400'>
              Creada en {order?.creationDate}
            </p>
          </div>
          <div className='text-right'>
            <h2 className='text-3xl font-bold'>${order?.totalPayment}</h2>
            <p className='text-gray-500 dark:text-gray-400'>Total</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-lg font-bold mb-2'>Información de envío</h2>
            <div className='space-y-1'>
              <p>{clientName}</p>
              <p className='w-80'>{order?.shippingAddress}</p>
              <p>{order?.phoneNumber}</p>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-bold mb-2'>Información de pago</h2>
            <div className='space-y-1'>
              <p>{order?.billingAddress}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Items de la Orden</h2>
          <table className='min-w-full'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b'>Producto</th>
                <th className='py-2 px-4 border-b'>Cantidad</th>
                <th className='py-2 px-4 border-b'>Precio</th>
                <th className='py-2 px-4 border-b'>Total</th>
              </tr>
            </thead>
            <tbody>
              {order?.products.map((product) => (
                <OrderDetailsTableItem orderProduct={product} />
              ))}
            </tbody>
          </table>
        </div>
        <button
          type='button'
          onClick={handleAcceptAction}
          className='bg-white w-full text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
        >
          Aceptar
        </button>
      </div>
    </PopUp>
  );
}
