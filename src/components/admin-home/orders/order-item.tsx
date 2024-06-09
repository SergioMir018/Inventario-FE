import { useEffect, useState } from 'react';
import OrderStateDropDown from './order-state-dropdown';
import { Order } from '../../../types/http-types';
import { fetchUser } from '../../../api/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../types/constants,';

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  const [orderState, setOrderState] = useState(order.status);
  const [clientName, setClientName] = useState<string | null>(null);
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

    getClientName(order.clientId);
  }, [order.clientId]);

  useEffect(() => {
      const changeOrderStatus = async (id: string) => {
        const response = await axios.put(`${BASE_URL}/order/updateStatus`, null, {
          params: {
            id: id,
            newStatus: orderState,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Producto actualizado con éxito:', response.data);
      };

      changeOrderStatus(order.orderId)
  }, [order.orderId, orderState])

  const orderDetailsAction = () => {
    navigate(`details/orderId=${order.orderId}/clientId=${order.clientId}`);
  };

  return (
    <div className='w-full h-60 flex justify-between bg-dark rounded-lg hover:drop-shadow-sm hover:drop-shadow-neon transition duration-100'>
      <div className='flex flex-col justify-between p-5 w-full'>
        <div className='w-full flex justify-between'>
          <p className='text-white font-gabarito-medium text-xl'>
            {order.name}
          </p>
        </div>
        <div className='w-full flex justify-between'>
          <label className='text-white/50 text-md font-gabarito'>Cliente</label>
          <p className='text-white text-md font-gabarito'>
            {clientName ? clientName : 'Cargando...'}
          </p>
        </div>
        <div className='w-full flex justify-between'>
          <label className='text-white/50 text-md font-gabarito'>
            Fecha de la orden
          </label>
          <p className='text-white text-md font-gabarito'>
            {order.creationDate}
          </p>
        </div>
        <div className='w-full flex justify-between'>
          <label className='text-white/50 text-md font-gabarito'>Total</label>
          <p className='text-white text-md font-gabarito'>
            ${order.totalPayment}
          </p>
        </div>
        <div className='w-full mt-5 flex gap-5 justify-end relative'>
          <button
            onClick={orderDetailsAction}
            className='py-1 px-5 text-white font-gabarito-bold rounded-md border-2 border-dark hover:border-white transition duration-100 absolute left-0 bottom-0'
          >
            Detalles
          </button>
          <div className='flex flex-col gap-1 w-[50%]'>
            <label className='text-white/50 text-md font-gabarito'>
              Estado de la orden:
            </label>
            <OrderStateDropDown
              setOrderState={setOrderState}
              order={orderState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
