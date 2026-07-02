import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
