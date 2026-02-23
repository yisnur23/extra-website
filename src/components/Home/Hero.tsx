import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/30 text-primary font-semibold text-sm mb-6 border border-primary/20 dark:border-primary/40">
              <span className="mr-2">✨</span> DIGITALIZATION & INDUSTRY 4.0
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Connect <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                All Your People & Operations!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-subtext-light dark:text-subtext-dark mb-10 max-w-2xl mx-auto lg:mx-0">
              Collect all your data, build industrial applications, and scale your systems without limits. Extra
              Engineering Solution helps your company develop powerful and cost-effective solutions for SCADA, IIoT,
              MES, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                to="/consultation"
              >
                Request Consultation
              </Link>
              <Link
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-text-light dark:text-text-dark bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                to="/services"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <img
                alt="Futuristic Industrial Robotic Arm 3D Render"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB116VglOnOAuvr1dSv6r-q8w43xjqbcB7KNk6AESLVxKTpYnnmjbxP7Tl-NuYsCLLio_vn-U_vI87uZSFHin6DBUK0kiaxAOTInvvY4gmjlBmH2IxwCFnlkoxTprAtRA7D8BfzL37s53u27vv3T8FWDnUMtLvRDmvA8bHIBlfztCmP5wG0_6V0NWsc-iQ3hLFlqmbeKqfh87kp0OlSLholXRCwgqNqMCYJ5sKU8WQBrYTklYGU4NQgu9W-9EkxHy6vB_uUbwWRzlq6"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
    </header>
  );
};

export default Hero;
