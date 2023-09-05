import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="container p-5 mx-auto">
        <Outlet />
      </div>
    </>
  );
}
