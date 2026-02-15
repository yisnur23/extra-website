import { useMemo, useState } from "react";
import PartnerCard, { type Partner } from "@/components/About/PartnerCard";
import arduinoLogo from "@/assets/Partnerships/ARDUINO.png";
import ignitionLogo from "@/assets/Partnerships/Ignition.png";
import nodeRedLogo from "@/assets/Partnerships/Node-RED.png";
import sorbaLogo from "@/assets/Partnerships/SORBA.png";
import siemensLogo from "@/assets/Partnerships/Siemens.png";

const partners: Partner[] = [
  {
    id: "inductive-automation",
    name: "Inductive Automation",
    logoSrc: ignitionLogo,
    logoAlt: "Inductive Automation logo",
    description: [
      "Extra Engineering Solution is a Premier Integrator partner of Inductive Automation, with extensive experience in their SCADA software, Ignition.",
      "Ignition SCADA is designed around Industrial Internet of Things (IIoT) and Industry 4.0, making it a strong fit for modern automation systems.",
      "Extra Engineering Solution maintains the highest integrator status with Inductive Automation.",
    ],
  },
  {
    id: "arduino",
    name: "Arduino",
    logoSrc: arduinoLogo,
    logoAlt: "Arduino logo",
    description: [
      "Extra Engineering Solution is the first Arduino System Integrator in Ethiopia.",
      "As a trusted partner, Extra Engineering Solution specializes in the development and integration of Arduino-based solutions tailored to each customer's specific requirements.",
      "Arduino is an all-in-one IoT platform that provides integrated hardware, firmware, software, cloud services, and development resources, including advanced libraries for enterprise and industrial use cases.",
    ],
  },
  {
    id: "siemens",
    name: "Siemens",
    logoSrc: siemensLogo,
    logoAlt: "Siemens logo",
    description: [
      "Extra Engineering Solution is an authorized integration and implementation service provider for Siemens solutions.",
      "Our commitment to delivering comprehensive training and maintaining up-to-date certifications ensures that Extra Engineering Solution remains at the forefront of Siemens technologies and is able to deliver reliable, high-quality, and risk-mitigated projects for customers.",
      "Extra Engineering Solution is a Siemens Solution Partner for the following product ranges:",
    ],
    offerings: [
      {
        title: "PLC Systems",
        items: ["SIMATIC S7-200 / S7-300 / S7-400 / S7-1200 / S7-1500"],
      },
      {
        title: "Safety PLC Systems",
        items: ["SIMATIC S7-300F / S7-400F", "SIMATIC S7-1200F / S7-1500F"],
      },
      {
        title: "HMI Systems",
        items: ["SIMATIC TP, OP, and MP panels", "WinCC Flexible"],
      },
      {
        title: "RTU Systems",
        items: ["SIMATIC RTU3030C"],
      },
      {
        title: "SCADA / PCS Systems",
        items: ["WinCC", "PCS 7"],
      },
      {
        title: "Motor Control",
        items: ["SINAMICS G120", "SINAMICS V20"],
      },
      {
        title: "Motion Control",
        items: ["SINAMICS S120"],
      },
      {
        title: "Legacy Systems & Migration Support",
        items: [
          "SIMATIC S5 PLC: 90U, 95U, 100U, 115U, 135U, 155U",
          "SIMATIC 505",
          "Simovert Masterdrives",
          "MICROMASTER 420 / 430 / 440",
          "APACS+",
          "QUADLOG",
        ],
      },
    ],
  },
  {
    id: "node-red",
    name: "Node-RED",
    logoSrc: nodeRedLogo,
    logoAlt: "Node-RED logo",
    description: [
      "Extra Engineering Solution partners with Node-RED to deliver flexible, scalable, and low-code integration solutions for industrial automation and Industrial IoT (IIoT) applications.",
      "Through this partnership, we leverage Node-RED's flow-based development environment to rapidly design, integrate, and deploy data-driven solutions that connect PLCs, RTUs, sensors, databases, and cloud platforms.",
      "By combining industrial engineering expertise with Node-RED's open, extensible architecture, Extra Engineering Solution enables customers to accelerate digital transformation, simplify system integration, and create reliable workflows for real-time monitoring, analytics, and control.",
      "This partnership helps deliver cost-effective, future-ready solutions while maintaining high standards of reliability, security, and operational performance.",
    ],
  },
  {
    id: "sorba-ai",
    name: "SORBA.ai",
    logoSrc: sorbaLogo,
    logoAlt: "SORBA.ai logo",
    description: [
      "Extra Engineering Solution partners with Sorbotics to deliver practical industrial AI and data-driven solutions.",
      "By combining OT/IT integration expertise with Sorbotics' SORBA.ai no-code AI platform, we help customers transform operational data into actionable insights, enabling predictive analytics, performance optimization, and faster digital transformation with minimal complexity.",
    ],
  },
];

const Partnerships = () => {
  const [selectedPartnerId, setSelectedPartnerId] = useState(partners[0].id);
  const selectedPartner = useMemo(
    () => partners.find((partner) => partner.id === selectedPartnerId) ?? partners[0],
    [selectedPartnerId],
  );

  return (
    <section
      className="bg-background-light dark:bg-card-dark py-24 border-t border-gray-200 dark:border-gray-800"
      id="partnerships"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Collaborative Ecosystem</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
            Global Partnerships
          </p>
          <p className="mt-4 max-w-2xl text-xl text-subtext-light dark:text-subtext-dark">
            Extra Engineering Solution is an active participant in the global industrial automation and digital
            transformation community.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl sticky top-24 text-white">
              <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-4">
                Integration & implementation partners
              </h3>
              <nav className="space-y-2">
                {partners.map((partner) => (
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                      selectedPartner.id === partner.id
                        ? "bg-primary text-white font-medium shadow-lg shadow-primary/30"
                        : "hover:bg-slate-800 text-slate-300 hover:text-white"
                    }`}
                    key={partner.id}
                    onClick={() => setSelectedPartnerId(partner.id)}
                    type="button"
                  >
                    <span>{partner.name}</span>
                    {selectedPartner.id === partner.id ? (
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    ) : null}
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="bg-slate-800 rounded-xl p-4">
                  <span className="material-symbols-outlined text-primary mb-2 text-2xl">star</span>
                  <p className="text-sm text-slate-300">Certified System Integrator for all major platforms.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:flex">
            <PartnerCard className="w-full min-h-[34rem] lg:h-full" partner={selectedPartner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
