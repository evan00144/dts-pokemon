import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="fieldbg">
      <img src="/landscape.jpg" className=" w-full h-full z-[-1] top-0 left-0  absolute" alt="" />
      <div className="container  p-5 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
