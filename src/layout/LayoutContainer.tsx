import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-background-light dark:bg-background-dark text-neutral-dark dark:text-white min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  );
};

export default LayoutContainer;
