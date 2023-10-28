export default function SalesOverview() {
  return (
    <section className="flex justify-between bg-[#1c1c1c] mt-[2rem] rounded-lg">
      <div className="bg-[#d2f56a] text-black w-full py-5 pl-5 rounded-tl-lg rounded-bl-lg">
        <h1 className="font-gabarito text-lg">
          Ventas totales
        </h1>
        <h2 className="font-gabarito-medium text-3xl mt-3">
          $825,491.73
        </h2>
        <div className="flex font-gabarito mt-[2rem]">
          <p>
            20.9%
          </p>
          <p className="ml-[2rem]">
            +18.4K esta semana
          </p>
        </div>
      </div>
      <div className="w-full py-5 pl-5 text-white">
        <h1 className="font-gabarito text-lg">
          Visitantes
        </h1>
        <h2 className="font-gabarito-medium text-3xl mt-3">
          780,192
        </h2>
        <div className="flex font-gabarito mt-[2rem]">
          <p className="text-[#d2f56a]">
            13%
          </p>
          <p className="ml-[2rem]">
            +3.5K esta semana
          </p>
        </div>
      </div>
      <div className="w-full py-5 pl-5 border-l border-r border-white/10 text-white">
        <h1 className="font-gabarito text-lg">
          Ordenes totales
        </h1>
        <h2 className="font-gabarito-medium text-3xl mt-3">
          2655
        </h2>
        <div className="flex font-gabarito mt-[2rem]">
          <p className="text-[#d2f56a]">
            4.2%
          </p>
          <p className="ml-[2rem]">
            +5K esta semana
          </p>
        </div>
      </div>
      <div className="w-full py-5 pl-5 text-white">
        <h1 className="font-gabarito text-lg">
          Devueltos
        </h1>
        <h2 className="font-gabarito-medium text-3xl mt-3">
          780
        </h2>
        <div className="flex font-gabarito mt-[2rem]">
          <p className="text-[#e94e2d]">
            9.1%
          </p>
          <p className="ml-[2rem]">
            +66 esta semana
          </p>
        </div>
      </div>
    </section>
  )
}
