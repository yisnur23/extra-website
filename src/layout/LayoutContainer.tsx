import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const LayoutContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300">
      <Navigation />
      <main className="flex-grow">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
