import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  );
};

export default LayoutContainer;
