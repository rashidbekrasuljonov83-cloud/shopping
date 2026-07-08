import React from "react";
import { Outlet } from "react-router-dom";
import Foooter from "../components/Footer";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>

      <Foooter />
    </div>
  );
}
