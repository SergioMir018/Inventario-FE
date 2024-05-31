import UserCard from "../user-card/user-card.tsx"

export default function TopHeader() {
  return (
      <nav className="flex justify-between">
        <div>
          <h1 className="text-white text-5xl font-gabarito-medium">
            Bienvenid@ de nuevo
          </h1>
          <h3 className="text-white/50 mt-2 font-gabarito text-xl">
            Esto es lo que sucede en tu tienda hoy
          </h3>
        </div>
        <div className="text-white flex mt-3 items-center h-[50%]">
          <UserCard />
        </div>
      </nav>
  )
}
