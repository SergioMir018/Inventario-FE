import { NavLink } from 'react-router-dom';
import ChartIcon from '../../icons/chart-icon';
import OrderIcon from '../../icons/order-icon';
import ShoppingBagIcon from '../../icons/shopping-bag-icon';
import classNames from 'classnames';

export default function AdminMenu() {
  return (
    <section
      className='flex flex-col border-t-2 border-b-2 border-white/10
      rounded-tr-3xl pb-[80%] rounded-br-3xl pt-3 items-center'
    >
      <ul
        className='flex flex-col gap-2 font-gabarito-medium text-lg 
        text-white w-full pr-4'
      >
        <li>
          <NavLink
            to={'overview'}
            className={({ isActive }) =>
              classNames('flex flex-row items-center w-full py-2 rounded-lg', {
                'bg-white text-black': isActive,
                'hover:bg-white/80 hover:text-black transition duration-100':
                  !isActive,
              })
            }
          >
            <ChartIcon /> Descripción general
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'products'}
            className={({ isActive }) =>
              classNames('flex flex-row items-center w-full py-2 rounded-lg', {
                'bg-white text-black': isActive,
                'hover:bg-white/80 hover:text-black transition duration-100':
                  !isActive,
              })
            }
          >
            <ShoppingBagIcon /> Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'orders'}
            className={({ isActive }) =>
              classNames('flex flex-row items-center w-full py-2 rounded-lg', {
                'bg-white text-black': isActive,
                'hover:bg-white/80 hover:text-black transition duration-100':
                  !isActive,
              })
            }
          >
            <OrderIcon /> Ordenes
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
