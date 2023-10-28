import AdminMenu from "../components/home/admin-menu";
import HeaderHeadline from "../components/home/header-headline";
import UserOpts from "../components/home/user-opts";

export default function Home() {
  return (
    <header className="flex flex-col gap-1 pl-10 pt-5 min-w-[15rem] lg:min-h-screen fixed
      border-r-2 border-white/10">
      <HeaderHeadline />
      <AdminMenu />
      <UserOpts />
    </header>
  )
}
