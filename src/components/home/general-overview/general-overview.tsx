import SearchIcon from "../../shared/search-icon";
import BellIcon from "../../shared/bell-icon";
import UserCard from "../../user-card/user-card.tsx"

export default function GeneralOverview() {
  return (
    <section className="flex justify-between">
      <nav>
        <h1 className="text-white text-5xl font-gabarito-medium">
          Bienvenid@ de nuevo
        </h1>
        <h3 className="text-white/50 mt-2 font-gabarito text-xl">
          Esto es lo que sucede en tu tienda hoy
        </h3>
      </nav>
      <div className="text-white flex mt-3 items-center h-[50%]">
        <SearchIcon />
        <BellIcon />
        <UserCard />
      </div>
    </section>
  )
}
