import awashWineLogo from "@/assets/clients/Awash Wine.png";
import bgiLogo from "@/assets/clients/BGI.png";
import cocaColaLogo from "@/assets/clients/Coca Cola.png";
import eegLogo from "@/assets/clients/EEG.png";
import eepLogo from "@/assets/clients/EEP.png";
import ewtiLogo from "@/assets/clients/EWTI.png";
import mugerCementLogo from "@/assets/clients/Muger Cement Factory.png";
import dashenBreweriesLogo from "@/assets/clients/dashen breweries.png";
import ezanaLogo from "@/assets/clients/ezana.png";
import komariLogo from "@/assets/clients/komari.png";
import pepsiLogo from "@/assets/clients/pepsi.png";
import manufacturingImg from "@/assets/industries/manufucturing.jpg";
import foodAndBeverageImg from "@/assets/industries/food and beverage.jpg";
import energyImg from "@/assets/industries/energy.jpg";
import waterImg from "@/assets/industries/water.jpg";
import miningImg from "@/assets/industries/mining.jpg";
import governmentInfrastructureImg from "@/assets/industries/government infrastructure.jpg";

const clientLogos = [
  { name: "Awash Wine", src: awashWineLogo },
  { name: "BGI", src: bgiLogo },
  { name: "Coca Cola", src: cocaColaLogo },
  { name: "EEG", src: eegLogo },
  { name: "EEP", src: eepLogo },
  { name: "EWTI", src: ewtiLogo },
  { name: "Muger Cement Factory", src: mugerCementLogo },
  { name: "Dashen Breweries", src: dashenBreweriesLogo },
  { name: "Ezana", src: ezanaLogo },
  { name: "Komari", src: komariLogo },
  { name: "Pepsi", src: pepsiLogo },
];

const OurWork = () => {
  return (
    <>
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sectors</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Industries We Serve
            </p>
            <p className="mt-4 max-w-2xl text-xl text-subtext-light dark:text-subtext-dark mx-auto">
              Specialized expertise tailored to the unique challenges of diverse industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="Manufacturing Plant"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={manufacturingImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">factory</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="Food Processing"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={foodAndBeverageImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">restaurant</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Food &amp; Beverage</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="Energy Grid"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={energyImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Energy &amp; Utilities</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="Water Treatment"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={waterImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">water_drop</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Water &amp; Wastewater</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="Mining"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={miningImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">landscape</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mining</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              <img
                alt="PGovernment Infrastructure "
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src={governmentInfrastructureImg}
              />
              <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Government Infrastructure </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-light dark:bg-card-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Work With Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Engineering Excellence You Can Trust
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">Deep Industry 4.0 expertise</h4>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Unified Namespace (UNS) architecture capability
                </h4>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Secure MQTT infrastructure design
                </h4>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">schema</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Structured modernization methodology
                </h4>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">build_circle</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Fast troubleshooting and maintenance support
                </h4>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Long-term technical partnership
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t border-gray-200 dark:border-gray-700 pt-12">
            <h4 className="text-center text-sm font-semibold text-subtext-light dark:text-subtext-dark uppercase tracking-widest mb-8">
              Trusted By Industry Leaders
            </h4>
            <div className="marquee-container w-full mask-gradient">
              <div className="marquee-content flex gap-12 items-center">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="h-24 min-w-[200px] sm:min-w-[240px] px-4 py-3 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    title={client.name}
                  >
                    <img
                      src={client.src}
                      alt={`${client.name} logo`}
                      className="max-h-16 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
