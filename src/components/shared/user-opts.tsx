import LogOutIcon from "./logout-icon";

export default function UserOpts () {
  return (
    <section className="flex flex-col border-t-2 border-white/10
      rounded-tr-3xl pt-3 items-center">
      <ul className="flex flex-col font-gabarito-medium text-lg 
        text-white w-full pr-4">
        <li className="flex flex-row items-center ml-2 w-full py-2">
          Ayuda
        </li>
        <li className="flex flex-row items-center ml-2 w-full py-2">
          Contactanos
        </li>
        <li className="flex flex-row items-center w-full py-2">
          <LogOutIcon /> Log out
        </li>
      </ul>
    </section>
  )
}
