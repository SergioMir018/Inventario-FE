import { Outlet } from "react-router-dom";
import Navbar from "../components/client-home/navbar";
import Footer from "../components/client-home/footer";

export default function ClientHome() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
