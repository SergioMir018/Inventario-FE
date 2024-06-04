import SearchTimeDropDown from "./search-time-dropdown.tsx"

export default function ProductsSearch () {
  return (
    <div className="w-[55%] flex justify-between relative">
      <input type="text" placeholder="Search" className="bg-transparent font-gabarito
      border px-6 py-1 w-[60%] rounded-lg border-grey focus:ring-1 focus:ring-white outline-none" />
      <SearchTimeDropDown />
    </div>
  )
}