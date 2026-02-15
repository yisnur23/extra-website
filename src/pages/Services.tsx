import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import AutomationService from "@/components/Services/AutomationService";
import EmsService from "@/components/Services/EmsService";
import Industry40Service from "@/components/Services/Industry40Service";
import OtItService from "@/components/Services/OtItService";
import PredictiveService from "@/components/Services/PredictiveService";
import ScadaService from "@/components/Services/ScadaService";
import SparePartsService from "@/components/Services/SparePartsService";

const serviceCatalog = [
  { id: "automation", label: "Industrial Automation & Digitalization", icon: "smart_toy" },
  { id: "scada", label: "SCADA, MES & IIoT", icon: "dvr" },
  { id: "industry40", label: "Industry 4.0 & UNS", icon: "cloud_sync" },
  { id: "ems", label: "Energy Management Systems", icon: "bolt" },
  { id: "predictive", label: "Predictive Maintenance & OEE", icon: "query_stats" },
  { id: "otit", label: "Enterprise Integration (OT/IT)", icon: "hub" },
  { id: "spareparts", label: "Spare Parts & Procurement", icon: "settings" },
] as const;

type ServiceId = (typeof serviceCatalog)[number]["id"];

const serviceComponentById: Record<ServiceId, ReactNode> = {
  automation: <AutomationService />,
  scada: <ScadaService />,
  industry40: <Industry40Service />,
  ems: <EmsService />,
  predictive: <PredictiveService />,
  otit: <OtItService />,
  spareparts: <SparePartsService />,
};

const getServiceIdFromHash = (): ServiceId | null => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return null;
  if (!serviceCatalog.some((item) => item.id === hash)) return null;
  return hash as ServiceId;
};

const getServiceNumber = (index: number) => `${String(index + 1).padStart(2, "0")}.`;

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceId>(
    () => getServiceIdFromHash() ?? serviceCatalog[0].id,
  );

  useEffect(() => {
    const handleHashChange = () => {
      const fromHash = getServiceIdFromHash();
      if (fromHash) {
        setSelectedService(fromHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleServiceSelect = (id: ServiceId) => {
    setSelectedService(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our Services <br className="hidden md:block" />
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400">
            From industrial automation to enterprise integration, we deliver scalable engineering solutions that improve
            reliability, visibility, efficiency, and long-term digital readiness.
          </p>
        </div>
      </header>
      <div className="lg:hidden mb-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Service Catalog</h3>
        <nav className="space-y-2">
          {serviceCatalog.map((item, index) => {
            const isActive = selectedService === item.id;
            return (
              <button
                aria-current={isActive ? "true" : undefined}
                className={`w-full text-left group flex items-center px-3 py-2 text-sm font-medium rounded-lg border-l-4 transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary border-primary"
                    : "text-slate-600 dark:text-slate-300 border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary hover:border-slate-300"
                }`}
                key={item.id}
                onClick={() => handleServiceSelect(item.id)}
                type="button"
              >
                <span className="w-10 text-xs font-bold tracking-wider opacity-70">{getServiceNumber(index)}</span>
                <span
                  className={`material-icons text-base mr-3 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Service Catalog</h3>
              <nav className="space-y-1">
                {serviceCatalog.map((item, index) => {
                  const isActive = selectedService === item.id;
                  return (
                    <button
                      aria-current={isActive ? "true" : undefined}
                      className={`w-full text-left group flex items-center px-3 py-2 text-sm font-medium rounded-lg border-l-4 transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary border-primary"
                          : "text-slate-600 dark:text-slate-300 border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary hover:border-slate-300"
                      }`}
                      key={item.id}
                      onClick={() => handleServiceSelect(item.id)}
                      type="button"
                    >
                      <span className="w-10 text-xs font-bold tracking-wider opacity-70">
                        {getServiceNumber(index)}
                      </span>
                      <span
                        className={`material-icons text-base mr-3 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h4 className="font-bold text-lg mb-2 relative z-10">Need a Custom Solution?</h4>
              <p className="text-sm text-slate-300 mb-4 relative z-10">
                Our engineers are ready to analyze your plant&apos;s specific needs.
              </p>
              <Link
                className="inline-flex w-full items-center justify-center bg-white text-slate-900 font-bold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm relative z-10"
                to="/consultation"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9">
          <div key={selectedService}>{serviceComponentById[selectedService]}</div>
        </main>
      </div>
    </div>
  );
};

export default Services;
