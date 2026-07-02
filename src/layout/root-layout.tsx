import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto mx-auto w-full max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
