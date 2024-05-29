import { Link } from "react-router-dom";
import ChartIcon from "../../icons/chart-icon";
import OrderIcon from "../../icons/order-icon";
import ShoppingBagIcon from "../../icons/shopping-bag-icon";

export default function AdminMenu() {
  return (
    <section className="flex flex-col border-t-2 border-b-2 border-white/10
      rounded-tr-3xl pb-[80%] rounded-br-3xl pt-3 items-center">
      <ul className="flex flex-col font-gabarito-medium text-lg 
        text-white w-full pr-4">
        <li className="rounded-lg hover:bg-white hover:text-black transition duration-100">
          <Link to={'/admin/home/overview'} className="flex flex-row items-center w-full py-2">
            <ChartIcon /> Descripción general
          </Link>
        </li>
        <li className="rounded-lg hover:bg-white hover:text-black transition duration-100">
          <Link to={'/admin/home/overview'} className="flex flex-row items-center w-full py-2">
            <ShoppingBagIcon /> Productos 
          </Link> 
        </li>
        <li className="rounded-lg hover:bg-white hover:text-black transition duration-100">
          <Link to={'/admin/home/overview'} className="flex flex-row items-center w-full py-2">
            <OrderIcon /> Ordenes
          </Link> 
        </li>
      </ul>
    </section>
  )
}
