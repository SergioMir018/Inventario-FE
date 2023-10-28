import AdminMenu from "../components/shared/admin-menu";
import HeaderHeadline from "../components/shared/header-headline";
import UserOpts from "../components/shared/user-opts";
import GeneralOverview from '../components/home/general-overview/general-overview';

export default function Home() {
  return (
    <section className="flex min-w-screen min-h-screen">
      <header className="flex flex-col gap-1 pl-10 pt-5 my-[3rem] min-w-[15rem]
        border-r-2 border-white/10">
        <HeaderHeadline />
        <AdminMenu />
        <UserOpts />
      </header>
      <main className="w-screen ml-[5rem] mr-[5rem] mt-[3rem]">
        <GeneralOverview />
      </main>
    </section>
  )
}
