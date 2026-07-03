import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-full h-full mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
