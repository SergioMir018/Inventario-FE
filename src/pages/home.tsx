import BusinessLogo from "../components/business-logo";

export default function Home() {
  return (
    <header className="pl-5 pt-5 min-w-[15rem] lg:min-h-screen fixed
      border-r-2 border-white/10">
      <div className="inline-block border-b-2 border-white/10 
        pb-4 pr-4 rounded-lg lg:min-w-56">
        <BusinessLogo />
      </div>
    </header>
  )
}
