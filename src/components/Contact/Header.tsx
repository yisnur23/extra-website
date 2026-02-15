const Header = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#683995 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.1,
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Touch</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark">
          Ready to transform your industrial operations? Our team of experts is here to discuss your automation needs
          and guide your digital transformation journey.
        </p>
      </div>
    </div>
  );
};

export default Header;
